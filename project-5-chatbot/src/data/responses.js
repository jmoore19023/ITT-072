const responses = [
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: "Hello! I'm the Moore Plants and Pots assistant. Ask me anything about the inventory system, purchase orders, or how the project was built."
  },
  {
    keywords: ["what", "about", "moore plants", "project", "overview"],
    response: "Moore Plants and Pots is a Python-based inventory and purchase order management system. It uses three custom classes, JSON file persistence, and supports search, sort, and seven different reports."
  },
  {
    keywords: ["plant", "inventory", "stock", "item"],
    response: "The inventory system tracks plants by name, category, price, and quantity. You can add new plants, update existing ones, search by name or category, and sort by price or quantity."
  },
  {
    keywords: ["purchase", "order", "buy", "po"],
    response: "Purchase orders track what needs to be restocked. Each order includes the plant name, quantity ordered, supplier, and order date. You can view all open orders or mark them complete."
  },
  {
    keywords: ["class", "classes", "oop", "object"],
    response: "The system uses three Python classes — Plant, PurchaseOrder, and InventoryManager. Each class handles its own data and methods, following object-oriented programming principles."
  },
  {
    keywords: ["json", "file", "save", "persist", "storage", "data"],
    response: "All data is saved to JSON files so it persists between sessions. The InventoryManager class handles reading and writing to these files automatically whenever changes are made."
  },
  {
    keywords: ["search", "find", "look up", "lookup"],
    response: "You can search the inventory by plant name or category. The search is case-insensitive and returns all matching results with their current stock levels and prices."
  },
  {
    keywords: ["sort", "order by", "organize"],
    response: "The inventory can be sorted by price (low to high or high to low) or by quantity. This makes it easy to identify your most valuable stock or find items that need restocking."
  },
  {
    keywords: ["report", "reports", "summary", "view"],
    response: "The system includes seven reports — full inventory, low stock alert, purchase order summary, category breakdown, total inventory value, completed orders, and items needing reorder."
  },
  {
    keywords: ["python", "language", "built", "code", "how"],
    response: "Moore Plants and Pots is built entirely in Python. It uses core Python concepts including classes, file I/O, JSON handling, list comprehensions, and error handling."
  },
  {
    keywords: ["category", "categories", "type", "types"],
    response: "Plants are organized by category — such as indoor, outdoor, succulents, tropicals, and herbs. You can filter and report by category to get a focused view of your inventory."
  },
  {
    keywords: ["price", "cost", "value", "worth"],
    response: "Each plant has a unit price. The system can calculate total inventory value across all stock, helping you understand the financial picture of your plant inventory."
  },
  {
    keywords: ["low", "restock", "reorder", "alert"],
    response: "The low stock report flags any plant with quantity below a set threshold. This helps you stay ahead of restocking before items run out completely."
  },
  {
    keywords: ["github", "code", "source", "repo", "repository"],
    response: "You can view the source code on GitHub at github.com/jmoore19023/ITT-072 under the Python Project folder."
  }
];

export function getBotResponse(input) {
  const lower = input.toLowerCase();

  for (let i = 0; i < responses.length; i++) {
    const keywords = responses[i].keywords;
    for (let j = 0; j < keywords.length; j++) {
      if (lower.includes(keywords[j])) {
        return responses[i].response;
      }
    }
  }

  return "I'm not sure about that one. Try asking about the inventory, purchase orders, Python classes, reports, or how the project was built.";
}