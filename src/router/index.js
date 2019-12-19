import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import Classify from "@/components/Classify";
import Shopping from "@/components/Shopping";
import Mine from "@/components/Mine";
import Details from "@/components/Details";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", redirect: "Home", meta:{flag:true}  },
    { path: "/Home", name: "Home", component: Home, meta:{flag:true}  },
    { path: "/Classify", name: "Classify", component: Classify, meta:{flag:true}  },
    { path: "/Shopping", name: "Shopping", component: Shopping, meta:{flag:true}  },
    { path: "/Details", name: "Details", component: Details, meta:{flag:false} },
    { path: "/Mine", name: "Mine", component: Mine, meta:{flag:true}  }
  ]
});
