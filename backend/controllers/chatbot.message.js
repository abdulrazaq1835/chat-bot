import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message=async(req,res)=>{
   try {
    const {text}=req.body;
 
    if(!text?.trim()){
        return res.status(400).json({error:"Text cannot be empty"});
    }

    const user=await User.create({
        sender:"user",
        text
    })

    // Data
    const botResponses={
  "hello": "Hi, How I can help you!!",
  "can we become friend": "Yes",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name?": "I’m ChatBot, your virtual assistant.",
  "who made you": "I was created by developers to help answer your questions.",
  "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
  "what is the time": "I can’t see a clock, but your device should know.",
  "bye": "Goodbye! Have a great day.",
  "thank you": "You’re welcome!",
  "i love you": "That’s sweet! I’m here to help you anytime.",
  "where are you from": "I live in the cloud — no rent, no bills!",
  "what can you do": "I can chat with you, answer questions, and keep you company.",

 "what is python": "Python is a high-level, interpreted programming language known for simplicity and versatility.\n• Easy to read/write due to clean syntax (similar to English)\n• Dynamically typed and supports multiple paradigms (OOP, functional, procedural)\n• Extensive libraries for AI, data science, web, automation\n• Example: Used in Google, YouTube, Instagram, and machine learning applications",

"what is java?": "Java is a platform-independent, object-oriented programming language.\n• Famous for 'Write Once, Run Anywhere' due to JVM (Java Virtual Machine)\n• Used in enterprise systems, Android development, cloud apps\n• Provides features like garbage collection, strong memory management\n• Example: Banking systems, Android apps, large-scale enterprise applications",

"what is recursion": "Recursion is when a function calls itself to solve smaller parts of a problem.\n• Useful for problems that can be divided into subproblems (divide-and-conquer)\n• Requires a **base condition** to stop infinite looping\n• Commonly used in: factorial calculation, Fibonacci sequence, tree/graph traversal\n• Example in coding interview: 'Write a recursive function to reverse a linked list'",

"who is prime minister of india?": "Narendra Modi is the Prime Minister of India since May 2014.\n• Belongs to Bharatiya Janata Party (BJP)\n• Represents Varanasi constituency\n• Key initiatives: Digital India, Startup India, Swachh Bharat, Make in India\n• Interview Tip: Link to governance or technology (e.g., Digital India impact on IT industry)",

"what is g20": "The G20 (Group of Twenty) is an intergovernmental forum of 19 countries + the European Union.\n• Founded in 1999 to address global financial stability\n• Members include India, USA, China, Japan, EU, etc.\n• Discusses economic growth, climate change, sustainable development\n• Recent: India hosted G20 summit in 2023",

"tell me about yourself": "This is usually the first interview question.\nStructure:\n• Start with a brief intro (name, background, education/work)\n• Highlight your skills (technical + soft skills)\n• Share achievements (projects, internships, leadership roles)\n• Conclude with why you’re excited about this role\nExample: 'I am a Computer Science graduate skilled in Python and SQL. I completed an internship at XYZ where I optimized a database query, improving performance by 30%. I’m passionate about problem-solving and eager to contribute to your team’s success.'",

"why should we hire you": "HR wants to see your value-add.\n• Emphasize skills that match job requirements\n• Show enthusiasm and cultural fit\n• Example: 'I bring strong coding skills in Python and SQL, along with problem-solving ability proven through hackathons. I am also a quick learner and adapt well to team environments. I believe I can contribute to both technical delivery and innovative ideas.'",

"what is leadership": "Leadership is the ability to inspire and guide others toward achieving goals.\n• Key traits: vision, communication, accountability, decision-making\n• Example in interview: 'I led a college project team of 4, where I divided tasks, coordinated communication, and ensured deadlines. We successfully delivered a working prototype before schedule.'",

"who is virat kohli": "Virat Kohli is one of India’s greatest batsmen and former captain.\n• Known for consistency, fitness, and aggressive play\n• Holds record for fastest century in ODIs for India\n• Nicknamed 'Chase Master' for his performance in run-chases\n• Interview Tip: If asked about sports management, relate his discipline & fitness to leadership skills",

"what is ipl": "The Indian Premier League (IPL) is a professional T20 cricket league started in 2008.\n• Played annually in India, franchise-based teams\n• Combines cricket + entertainment (biggest sports league in India)\n• Significant for sports business, sponsorships, brand endorsements\n• Example: Chennai Super Kings (CSK) & Mumbai Indians (MI) are top teams"
,
"what is http?": "HTTP (HyperText Transfer Protocol) is the foundation of communication on the web.\n• Works on request-response model\n• Default port 80 (HTTP) and 443 (HTTPS)\n• Stateless protocol (each request is independent)\n• Example: When you visit google.com, your browser sends an HTTP GET request to Google's server.",

  "what is api?": "API (Application Programming Interface) allows software applications to communicate with each other.\n• Acts like a contract between two systems\n• REST, GraphQL, and SOAP are popular API styles\n• Example: Weather API provides real-time weather info to apps.",

  "what is sql?": "SQL (Structured Query Language) is used to manage and query relational databases.\n• Commands: SELECT, INSERT, UPDATE, DELETE\n• Supports constraints, joins, indexes\n• Example: SELECT * FROM users WHERE age > 25;",

  "difference between sql and nosql": "SQL databases are relational, use structured schemas and tables.\n• Examples: MySQL, PostgreSQL, Oracle\nNoSQL databases are schema-less, store data in key-value, document, or graph format.\n• Examples: MongoDB, Cassandra, Redis\n• Interview Tip: Use SQL for structured data, NoSQL for flexible or big data.",

  "what is operating system": "An OS is system software that manages hardware and software resources.\n• Functions: process management, memory management, file system, device handling\n• Examples: Windows, Linux, macOS, Android\n• Without OS, user cannot interact with hardware easily.",

  "explain cloud computing": "Cloud computing provides on-demand services (servers, storage, networking, databases) over the internet.\n• Models: IaaS, PaaS, SaaS\n• Examples: AWS, Azure, Google Cloud\n• Benefits: scalability, cost efficiency, global access.",

  "what is ai?": "AI (Artificial Intelligence) is the simulation of human intelligence in machines.\n• Includes machine learning, natural language processing, robotics\n• Applications: chatbots, self-driving cars, recommendation systems\n• Example: ChatGPT is an AI language model.",

  "who is elon musk?": "Elon Musk is a billionaire entrepreneur and CEO.\n• Companies: Tesla, SpaceX, Neuralink, X (Twitter)\n• Known for pushing electric vehicles, reusable rockets, Mars colonization\n• Interview Tip: Can link to innovation & entrepreneurship.",

  "what is teamwork?": "Teamwork is collaborative effort to achieve a goal.\n• Key skills: communication, trust, responsibility, problem-solving\n• Example in interview: 'I worked with 5 teammates on a web app where I handled backend, others handled frontend. We coordinated via GitHub and completed before deadline.'",

  "what is oops?": "OOP (Object-Oriented Programming) is a paradigm based on objects.\n• Main pillars: Encapsulation, Inheritance, Polymorphism, Abstraction\n• Languages: Java, C++, Python, C#\n• Example: A 'Car' class with properties (color, speed) and methods (drive, stop).",

  "difference between stack and queue": "Stack: Follows LIFO (Last In First Out)\n• Example: Undo feature in text editor.\nQueue: Follows FIFO (First In First Out)\n• Example: Printer job scheduling.",

  "what is binary search?": "Binary Search is a divide-and-conquer algorithm to find an element in a sorted array.\n• Steps: Compare middle element → reduce search space by half\n• Time Complexity: O(log n)\n• Example: Searching roll number in sorted student list.",

  "what is time complexity?": "Time complexity defines how running time of an algorithm increases with input size.\n• Common notations: O(1), O(log n), O(n), O(n log n), O(n^2)\n• Example: Linear Search → O(n), Binary Search → O(log n).",

  "what is promise in javascript?": "Promise is an object representing the eventual completion (or failure) of an async operation.\n• States: pending, fulfilled, rejected\n• Methods: .then(), .catch(), .finally()\n• Example: fetch('api/data').then(res => res.json()).catch(err => console.error(err));",

  "difference between var let const": "var → function scoped, can be redeclared & hoisted.\nlet → block scoped, can be updated but not redeclared in same scope.\nconst → block scoped, cannot be reassigned.\n• Example: Use const for constants, let for changing values.",

  "what is event loop in javascript?": "Event Loop handles async callbacks in JS.\n• JS is single-threaded, uses call stack + callback queue\n• Event loop constantly checks: if stack empty → execute queued tasks\n• Example: setTimeout(() => console.log('Hi'), 0) runs after main code finishes.",

  "what is dns?": "DNS (Domain Name System) translates domain names into IP addresses.\n• Example: www.google.com → 142.250.183.110\n• Works like a phonebook of the internet\n• Components: DNS resolver, root server, TLD server, authoritative server.",

  "difference between monolithic and microservices": "Monolithic: Single large application with tightly coupled components.\n• Example: Old e-commerce apps where everything (auth, orders, payment) is in one codebase.\nMicroservices: Small, independent services communicating via APIs.\n• Example: Modern apps with separate services for payment, orders, notifications.",

  "what is load balancer?": "A load balancer distributes incoming traffic across mul",




   "what is closure in javascript ": "Closure is when a function remembers variables from its outer scope even after the outer function has finished.\n• Useful for data privacy and maintaining state\n• Example:\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nconst counter = outer();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2",

  "what is recursion": "Recursion is when a function calls itself to solve smaller parts of a problem.\n• Useful for divide-and-conquer problems\n• Requires a base condition to stop infinite looping\n• Example:\nfunction factorial(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5)); // 120",

  "what is binary search": "Binary Search finds an element in a sorted array efficiently.\n• Time Complexity: O(log n)\n• Example:\nfunction binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while(left <= right) {\n    let mid = Math.floor((left + right)/2);\n    if(arr[mid] === target) return mid;\n    else if(arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}\nconsole.log(binarySearch([1,2,3,4,5], 4)); // 3",

  "what is stack": "Stack is a linear data structure following LIFO (Last In First Out).\n• Example: undo operation in editors\n• Example:\nclass Stack {\n  constructor() { this.items = []; }\n  push(el) { this.items.push(el); }\n  pop() { return this.items.pop(); }\n}\nconst s = new Stack();\ns.push(10);\ns.push(20);\nconsole.log(s.pop()); // 20",

  "what is queue": "Queue is a linear data structure following FIFO (First In First Out).\n• Example: printer job scheduling\n• Example:\nclass Queue {\n  constructor() { this.items = []; }\n  enqueue(el) { this.items.push(el); }\n  dequeue() { return this.items.shift(); }\n}\nconst q = new Queue();\nq.enqueue(1);\nq.enqueue(2);\nconsole.log(q.dequeue()); // 1",

  "what is promise": "Promise is an object representing eventual completion/failure of async operations.\n• States: pending, fulfilled, rejected\n• Example:\nconst myPromise = new Promise((resolve) => {\n  setTimeout(() => resolve('Done!'), 1000);\n});\nmyPromise.then(res => console.log(res)); // Done!",

  "what is async await": "async/await simplifies working with Promises.\n• Makes async code look synchronous\n• Example:\nasync function fetchData() {\n  let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');\n  let data = await res.json();\n  console.log(data);\n}\nfetchData();",

  "what is class in javascript": "Class is a blueprint for creating objects in JavaScript.\n• Supports constructor, methods, inheritance\n• Example:\nclass Car {\n  constructor(name) { this.name = name; }\n  drive() { console.log(this.name + ' is driving'); }\n}\nconst car1 = new Car('Tesla');\ncar1.drive(); // Tesla is driving",

  "what is event loop": "Event Loop handles asynchronous operations in JavaScript.\n• JS is single-threaded but async via event loop\n• Example:\nconsole.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nconsole.log('End');\n// Output: Start End Timeout",

  "difference between let and const": "let is block-scoped and can be updated; const is block-scoped and cannot be reassigned.\n• Example:\nlet a = 10;\na = 20; // OK\nconst b = 30;\n// b = 40; // Error"
,

  "what is array": "Array is a collection of elements stored in contiguous memory.\n• Fixed size (in some languages), random access via index\n• Example:\nlet arr = [1,2,3,4];\nconsole.log(arr[2]); // 3",

  "what is linked list": "Linked List is a linear data structure where each element points to the next.\n• Types: singly, doubly, circular\n• Example:\nclass Node {\n  constructor(data) { this.data = data; this.next = null; }\n}\nlet head = new Node(10);\nhead.next = new Node(20);\nconsole.log(head.data, head.next.data); // 10 20",

  "what is stack": "Stack is a linear data structure following LIFO (Last In First Out).\n• Used in undo feature, expression evaluation\n• Example:\nclass Stack {\n  constructor() { this.items = []; }\n  push(el) { this.items.push(el); }\n  pop() { return this.items.pop(); }\n}\nlet s = new Stack();\ns.push(10);\ns.push(20);\nconsole.log(s.pop()); // 20",

  "what is queue": "Queue is a linear data structure following FIFO (First In First Out).\n• Used in job scheduling, BFS\n• Example:\nclass Queue {\n  constructor() { this.items = []; }\n  enqueue(el) { this.items.push(el); }\n  dequeue() { return this.items.shift(); }\n}\nlet q = new Queue();\nq.enqueue(1);\nq.enqueue(2);\nconsole.log(q.dequeue()); // 1",

  "what is recursion": "Recursion is when a function calls itself to solve smaller subproblems.\n• Requires a base condition to stop infinite calls\n• Example:\nfunction factorial(n) {\n  if(n === 0) return 1;\n  return n * factorial(n-1);\n}\nconsole.log(factorial(5)); // 120",

  "what is binary search": "Binary Search finds an element in a sorted array by repeatedly dividing search space.\n• Time Complexity: O(log n)\n• Example:\nfunction binarySearch(arr, target) {\n  let left=0, right=arr.length-1;\n  while(left <= right){\n    let mid = Math.floor((left+right)/2);\n    if(arr[mid] === target) return mid;\n    else if(arr[mid] < target) left = mid+1;\n    else right = mid-1;\n  }\n  return -1;\n}\nconsole.log(binarySearch([1,2,3,4,5],4)); // 3",

  "what is depth first search": "DFS is a graph traversal algorithm that explores as far as possible along each branch before backtracking.\n• Implemented using stack (or recursion)\n• Example:\nfunction DFS(node){\n  if(!node) return;\n  console.log(node.val);\n  node.children.forEach(DFS);\n}",

  "what is breadth first search": "BFS is a graph traversal algorithm that explores all neighbors level by level.\n• Implemented using queue\n• Example:\nfunction BFS(root){\n  let queue = [root];\n  while(queue.length){\n    let node = queue.shift();\n    console.log(node.val);\n    queue.push(...node.children);\n  }\n}",

  "what is merge sort": "Merge Sort is a divide-and-conquer algorithm that divides array into halves, sorts them, and merges back.\n• Time Complexity: O(n log n)\n• Example:\nfunction mergeSort(arr){\n  if(arr.length <= 1) return arr;\n  const mid = Math.floor(arr.length/2);\n  const left = mergeSort(arr.slice(0,mid));\n  const right = mergeSort(arr.slice(mid));\n  const merge = [];\n  while(left.length && right.length){\n    merge.push(left[0] < right[0] ? left.shift() : right.shift());\n  }\n  return merge.concat(left).concat(right);\n}\nconsole.log(mergeSort([4,2,7,1])); // [1,2,4,7]",

  "what is quick sort": "Quick Sort is a divide-and-conquer algorithm that picks a pivot and partitions array around it.\n• Average Time Complexity: O(n log n)\n• Example:\nfunction quickSort(arr){\n  if(arr.length <=1) return arr;\n  const pivot = arr[arr.length-1];\n  const left = [], right = [];\n  for(let i=0;i<arr.length-1;i++){\n    if(arr[i]<pivot) left.push(arr[i]);\n    else right.push(arr[i]);\n  }\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}\nconsole.log(quickSort([4,2,7,1])); // [1,2,4,7]"

}

const normalizedText = text.toLowerCase().trim();

const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

const bot = await Bot.create({
    text: botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})
   } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({error:"Internal Server Error"});
   }
}