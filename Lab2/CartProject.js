import readline from "readline/promises";
import { stdin, stdout } from "process";
import { writeFile, readFile, appendFile } from "fs/promises";

const FILE = "product.json";
const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const addToCart = async (product) => {
  const cart = await getCart();
  const isFoundInCart = cart.find((item) => item.id === product.id);
  if (isFoundInCart) {
    isFoundInCart.qty += 1;
  } else {
    cart.push(product);
    await saveCart(cart);
    console.log(`${product.name} added/updated to cart 🛒`);
  }
};

const displayCart = async () => {
  const cart = await getCart();
  if (cart.length == 0) {
    console.log("\n \n 🛒 is Empty");
    return;
  }
  console.table(cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  console.log(`Total payable amoun RS. ${total}`);
};

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });
  do {
    console.log("Welcome to Amazon Shopping 🛒");
    console.log("1.........Show Cart");
    console.log("2.........Add Product");
    console.log("3.........Remove Product");
    console.log("4.........Update Quantity");
    console.log("5.........Checkout");
    choice = await cin.question("Enter your Choice");

    switch (Number(choice)) {
      case 1:
        console.log("\n");
        displayCart();
        break;
      case 2:
        const item = await cin.question("Enter id, name, price, qty :");
        const [id, name, price, qty] = item.split(",").map((p) => p.trim());
        await addToCart({
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        });
        break;
      case 3:
        console.log("remove product");
        break;
      case 4:
        console.log("update quantity");
        break;
      case 5:
        console.log("checkout");
        break;
      default:
        console.log("Inavalid Choice");
    }
  } while (choice != 5);
  cin.close();
};

main();
