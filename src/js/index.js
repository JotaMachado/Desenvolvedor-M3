import { CartPurchase } from "./Cart/cart";
import { filter } from "./Filter/filter";
import { fetchData } from "./displayProducts/displayProducts";
import { display } from "./displayResponsive/display";
import { orderByPriceAsc } from "./orderBy/orderByPriceAsc";
import { orderByPriceDesc } from "./orderBy/orderByPriceDesc";
import { orderBy } from "./orderBy/orderByRecent";

fetchData();
display;
filter();
orderBy();
orderByPriceAsc();
orderByPriceDesc();
CartPurchase();
