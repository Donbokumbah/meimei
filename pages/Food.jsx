import ProductsHeading from "@/components/ProductsHeading";
import Wrapper from "@/components/Wrapper";
import Products from "@/components/products";
import { fetchdata } from "@/utils/api";


// const slides = [
//   {
//     id: 1,
//     img: "/img/1.jpg",
//     name: "Grilled Chicken Sandwich",
//     ingredients: ["grilled chicken breast", "lettuce", "tomato", "mayonnaise", "whole grain bun"],
//     description: "Our Grilled Chicken Sandwich features a tender and juicy grilled chicken breast, topped with fresh lettuce, tomato, and creamy mayonnaise, served on a wholesome whole grain bun.",
//     price: 7.99,
//     prevPrice: 8.99
//   },
//   {
//     id: 2,
//     img: "/img/2.jpg",
//     name: "Double Cheeseburger",
//     ingredients: ["two beef patties", "lettuce", "tomato", "onion", "pickles", "american cheese", "special sauce", "sesame seed bun"],
//     description: "Our Double Cheeseburger features two juicy beef patties, topped with fresh lettuce, tomato, onion, pickles, melted American cheese, and slathered in our special sauce, served on a warm sesame seed bun.",
//     price: 9.99,
//     prevPrice: 10.99
//   },
//   {
//     id: 3,
//     img: "/img/3.jpg",
//     name: "Caesar Salad",
//     ingredients: ["romaine lettuce", "croutons", "shaved parmesan cheese", "caesar dressing"],
//     description: "Our Caesar Salad features crisp romaine lettuce, topped with crunchy croutons, shaved parmesan cheese, and drizzled with a classic Caesar dressing.",
//     price: 6.99,
//     prevPrice: 7.99
//   },
//   {
//     id: 4,
//     img: "/img/4.jpg",
//     name: "Veggie Burger",
//     ingredients: ["veggie patty", "lettuce", "tomato", "onion", "pickles", "cheddar cheese", "special sauce", "whole wheat bun"],
//     description: "Our Veggie Burger features a hearty veggie patty, topped with fresh lettuce, tomato, onion, pickles, melted cheddar cheese, and slathered in our special sauce, served on a wholesome whole wheat bun.",
//     price: 8.99,
//     prevPrice: 9.99
//   },
//   {
//     id: 5,
//     img: "/img/5.jpg",
//     name: "BBQ Ribs",
//     ingredients: ["pork ribs", "BBQ sauce", "baked beans", "corn on the cob", "potato salad"],
//     description: "Our BBQ Ribs feature tender and juicy pork ribs, smothered in our tangy BBQ sauce, served with a side of baked beans, corn on the cob, and our classic potato salad.",
//     price: 14.99,
//     prevPrice: 15.99
//   },
//   {
//     id: 6,
//     img: "/img/6.jpg",
//     name: "Fish Tacos",
//     ingredients: ["grilled tilapia", "corn tortillas", "shredded cabbage", "pico de gallo", "avocado crema"],
//     description: "Our Fish Tacos feature grilled tilapia, served on warm corn tortillas, topped with crunchy shredded cabbage, fresh pico de gallo, and a creamy avocado crema.",
//     price: 10.99,
//     prevPrice: 11.99
//   },
//   {
//     id: 7,
//     img: "/img/7.jpg",
//     name: "Margherita Pizza",
//     ingredients: ["tomato sauce", "mozzarella cheese", "fresh basil", "olive oil"],
//     description: "Our Margherita Pizza features a classic tomato sauce, melted mozzarella cheese, and fresh basil, drizzled with olive oil and baked to perfection.",
//     price: 11.99,
//     prevPrice: 12.99
//   },
//   {
//     id: 8,
//     img: "/img/8.jpg",
//     name: "Beef Burrito",
//     ingredients: ["seasoned beef", "rice", "black beans", "shredded lettuce", "cheddar cheese", "sour cream", "guacamole", "flour tortilla"],
//     description: "Our Beef Burrito features tender and flavorful seasoned beef, mixed with rice and black beans, wrapped in a warm flour tortilla, and topped with shredded lettuce, melted cheddar cheese, sour cream, and fresh guacamole.",
//     price: 8.99,
//     prevPrice: 9.99
//   },
//   {
//     id: 9,
//     img: "/img/9.jpg",
//     name: "Chicken Caesar Wrap",
//     ingredients: ["grilled chicken", "romaine lettuce", "parmesan cheese", "caesar dressing", "flour tortilla"],
//     description: "Our Chicken Caesar Wrap features grilled chicken, crisp romaine lettuce, shaved parmesan cheese, and drizzled with a classic Caesar dressing, all wrapped up in a warm flour tortilla.",
//     price: 6.99,
//     prevPrice: 7.99
//   },
//   {
//     id: 10,
//     img: "/img/10.jpg",
//     name: "Veggie Pizza",
//     ingredients: ["tomato sauce", "mushrooms", "bell peppers", "onions", "black olives", "mozzarella cheese"],
//     description: "Our Veggie Pizza features a classic tomato sauce, topped with sautéed mushrooms, bell peppers, onions, black olives, and melted mozzarella cheese.",
//     price: 12.99,
//     prevPrice: 13.99
//   },
//   {
//     id: 11,
//     img: "/img/11.jpg",
//     name: "Bacon Cheeseburger",
//     ingredients: ["beef patty", "bacon", "lettuce", "tomato", "onion", "pickles", "cheddar cheese", "special sauce", "sesame seed bun"],
//     description: "Our Bacon Cheeseburger features a juicy beef patty, topped with crispy bacon, fresh lettuce, tomato, onion, pickles, melted cheddar cheese, and slathered in our special sauce, served on a warm sesame seed bun.",
//     price: 10.99,
//     prevPrice: 11.99
//   },
//   {
//     id: 12,
//     img: "/img/12.jpg",
//     name: "Classic Margherita Pizza",
//     ingredients: ["tomato sauce", "mozzarella cheese", "fresh basil", "olive oil", "thin crust"],
//     description: "Our Classic Margherita Pizza is a simple yet delicious pizza that features tomato sauce, melted mozzarella cheese, and fresh basil, all drizzled with a touch of olive oil and served on a crispy thin crust.",
//     price: 12.99,
//     prevPrice: 13.99
//   },
//   {
//     id: 13,
//     img: "/img/13.jpg",
//     name: "Beef and Broccoli Stir Fry",
//     ingredients: ["beef strips", "broccoli florets", "soy sauce", "garlic", "ginger", "rice"],
//     description: "Our Beef and Broccoli Stir Fry is a savory dish that features tender beef strips and crisp broccoli florets, all stir-fried in a flavorful sauce made with soy sauce, garlic, and ginger. Served with steamed rice.",
//     price: 11.99,
//     prevPrice: 12.99
//   },
//   {
//     id: 14,
//     img: "/img/14.jpg",
//     name: "Greek Salad",
//     ingredients: ["romaine lettuce", "cucumber", "tomato", "red onion", "kalamata olives", "feta cheese", "lemon vinaigrette"],
//     description: "Our Greek Salad is a refreshing and healthy option that features crisp romaine lettuce, juicy tomatoes, crunchy cucumbers, tangy red onions, salty kalamata olives, and crumbled feta cheese, all tossed in a zesty lemon vinaigrette.",
//     price: 8.99,
//     prevPrice: 9.99
//   },
//   {
//     id: 15,
//     img: "/img/15.jpg",
//     name: "Pesto Chicken Panini",
//     ingredients: ["grilled chicken breast", "mozzarella cheese", "pesto sauce", "roasted red peppers", "ciabatta bread"],
//     description: "Our Pesto Chicken Panini is a delicious sandwich that features grilled chicken breast, melted mozzarella cheese, and tangy roasted red peppers, all smothered in a flavorful pesto sauce and served on warm ciabatta bread.",
//     price: 9.99,
//     prevPrice: 10.99
//   }
  
// ]

export default function Home({products}) {
  return (
    <main className=''>
      <Wrapper className="h-[100%] m-auto ">
        <ProductsHeading className=" mt-12 mb-12"/>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-0 h-[100%] w-[80vw] m-auto mb-12 ">
        {products?.data?.map((product) => (
            <Products key={product.id}
            data={product}
            />
          ))}
        </div>
      </Wrapper>
    </main>
  )
}

export async function getStaticProps(){
  const products = await fetchdata("/api/products?populate=*");
  
  return {
    props: {products}
  }
}