import {
  createAsyncThunk,
  createSlice,
  nanoid,
  applyMiddleware,
} from "@reduxjs/toolkit";
import SetL from "../../SaveLocalState/SaveLocalSizes";
import GetL from "../../SaveLocalState/Get";
import axios from "axios";
import { useState } from "react";
export const getOrders = createAsyncThunk("getorders", async () => {
  const res = await fetch(
    "https://mim-super-shop-backend-6.onrender.com/api/orders"
  );
  return res.json();
});
export const GetProducts = createAsyncThunk("getProducts", async () => {
  const res = await fetch(
    "https://mim-super-shop-backend-6.onrender.com/api/products"
  );
  return res.json()
});
export const GetUser = createAsyncThunk(
  "user",
  async () => {
     const res = await fetch(
       "https://mim-super-shop-backend-6.onrender.com/api/getuser"
     );
     return res.json();
  }

);
export const Visitor = createAsyncThunk("visitor", async () => {
  const res = await fetch(
    "https://mim-super-shop-backend-6.onrender.com/api/visitors"
  );
  return res.json()
}
  )
const Temp = GetL("temp");
const wishList = GetL("wishlist") ? GetL("wishlist") : [];
const Cart = GetL("Cart") === null ? [] : GetL("Cart");
const Order = GetL("orders") === null ? [] : GetL("orders");
const myInfo = GetL("myInfo") === null ? [] : GetL("myInfo");
const user = GetL("user") === null ? {} : GetL("user");
const admin = GetL("admin") === null ? {} : GetL("admin");
const users = GetL("users") === null ? [] : GetL("users");
const visitor = GetL("visitor") === null ? [] : GetL("visitor");
const product = GetL("products") === null ? {} : GetL("products");
const initialState = {
  tempProduct: Temp,
  t_pro: product,
  t_order:Order,
  products: product,
  wishList: wishList,
  showCart: false,
  Cart: Cart,
  user: user,
  users:users,
  orders: [],
  useOrder:Order,
  tempOrder: [],
  Visitor: visitor,
  myInfo: myInfo,
  admin:admin
 
};
const MimSuper = createSlice({
  name: "Mim Super Shop",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      SetL("orders", action.payload);
    });
    builder.addCase(GetProducts.fulfilled, (state, action) => {
      const product = action.payload[0]
      state.products = product?.data
      SetL("products",state.products)
    });
    builder.addCase(GetUser.fulfilled, (state, action) => {
      state.users = action.payload
      SetL("users",state.users)
    })
    builder.addCase(Visitor.fulfilled, (state, action) => {
      state.Visitor = action.payload
      SetL("visitor",state.Visitor)
    })
  },
  reducers: {
    saveTempPro: (state, action) => {
      state.tempProduct = action.payload;
      SetL("temp", state.tempProduct);
    },
    AddAdmin: (state, action) =>
    {
      state.admin = action.payload
      SetL("admin",state.admin)
    },
    
    // MyInfoData: (state, action) => {
    //    const obj = {
    //      userId: nanoid(),
    //      date: new Date().toDateString().split(" ").join("_"),
    //   };
    //   state.myInfo = obj
    
    //  console.log(visitor);
    
    //    SetL("my_info", obj);
    // },
    AddMyInfo: (state, action) =>
    {
      const user = action.payload;
      const visitor = state.Visitor
      const info = state.myInfo;
    
      console.log(visitor);
        axios.put(
          `https://mim-super-shop-backend-6.onrender.com/api/updatevisitor/${visitor?._id}`,
          {
            visitors: visitor?.visitors ? [...visitor?.visitors, user] : [user],
            expireDate: visitor?.expireDate,
          }
        );
     
        state.myInfo = user;
        SetL("myInfo", user);
      
    },
    SaveSotreData: (state, action) => {
      
      state.products = action.payload;
    },
    AddWishList: (state, action) => {
      state.wishList = action.payload;
      SetL("wishlist", state.wishList);
    },
    RemoveFromWishList: (state, action) => {
      const Index = state.wishList.findIndex(
        (data) => data.id === action.payload.id
      );
      state.wishList.splice(Index, 1);
      SetL("wishlist", state.wishList);
    },
    ShowCart: (state, action) => {
      state.showCart = !state.showCart;
    },
    AddItemInCart: (state, action) => {
      const NewObj = {
        _id: nanoid(),
        ...action.payload,
      };
      state.Cart = [...state.Cart, NewObj];
      SetL("Cart", state.Cart);
    },
    RemoveItemFromCart: (state, action) => {
      const id = action.payload._id;
      state.Cart = state.Cart.filter((data) => data._id !== id);
      SetL("Cart", state.Cart);
    },
    UpdateAmount: (state, action) => {
      const index = state.Cart.findIndex(
        (data) => data.id === action.payload.id
      );
      state.Cart[index] = action.payload;
      SetL("Cart", state.Cart);
    },
    AddUser: (state, action) => {
      state.user = action.payload;
      SetL("user", state.user);
    },
    UpdateUser: (state, action) => {
      fetch(
        `https://mim-super-shop-backend-6.onrender.com/api/updateuser/${state.user._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(action.payload),
        }
      );
      state.user = action.payload;
      SetL("user", action.payload);
    },

    LogOut: (state, action) => {
      state.user = {};
      SetL("user", state.user);
    },
    ClearCart: (state, action) => {
      state.Cart = [];
      SetL("Cart", state.Cart);
    },
    TempOrder: (state, action) => {
      state.tempOrder = action.payload;
    },
    UpdateProduct: (state, action) => {
      const id = action.payload.id
      const body = action.payload.body
      const index = state.t_pro.findIndex(data => data.id === id)
      state.t_pro[index] = {
        ...state.t_pro[index],
        reviews:state.t_pro[index]?.reviews?[...state.t_pro[index]?.reviews,body]:[body]
      }
      state.tempProduct = state.t_pro[index];
      SetL("temp",state.tempProduct)
      state.products=state.t_pro
      axios.post(
        `https://mim-super-shop-backend-6.onrender.com/api/updateproduct/658827157f0bd2728803fd8e`,
        {
          data: state.products,
        }
      );
      SetL("products",state.products)
    },
    AddProduct: (state, action) =>
    {
      const pro = action.payload
      const proarr = [...state.t_pro, pro]
      
      state.products = proarr;
      axios.post(
        "https://mim-super-shop-backend-6.onrender.com/api/updateproduct/658827157f0bd2728803fd8e",
        {
          data: state.products,
        }
      );
      SetL("products", state.products);
    },
    DeleteProduct: (state, action) =>
    {
      const id = action.payload
      const arr = state.t_pro.filter(data => data.id !== id)
      state.products = arr;
      axios.post(
        "https://mim-super-shop-backend-6.onrender.comapi/updateproduct/658827157f0bd2728803fd8e",
        {
          data: state.products,
        }
      );
      SetL("products", state.products);
      
      },
    DeleteOrder :(state,action)=>
    {
      const id = action.payload.id
      const index = state.t_order.findIndex(data => data._id === id)
      const pro = state.t_order[index]
      if (pro?.order?.products.length <= 1)
      {
         axios.delete(
           `https://mim-super-shop-backend-6.onrender.com/api/deleteorder/${id}`
         );
        }
        state.t_order[index] = {
          ...pro,
          order: {
            ...pro.order,
            products: pro?.order?.products.filter(
              (data) => data._id !== action.payload.pro_id
            ),
          },
        };
      axios.post(
        `https://mim-super-shop-backend-6.onrender.com/api/updateorder/${id}`,
        {
          order: state.t_order[index].order,
        }
      );

      state.orders = state.t_order
      SetL("orders",state.orders)
    },
  UpdateOrder: (state, action) =>
  {
    const id = action.payload.id
    console.log(id);
    const index = state.t_order?.findIndex(data => data._id === id)
    const body = action.payload.body
    const temp = state.t_order[index].order
    const prodducts = temp?.products
    
    const newArr = prodducts?.map(data => {
      if (data._id === body._id)
      {
        return body
      }
      else
      {
        return data
        }
      
    })
    state.t_order[index] = {
      ...state.t_order[index],
      order: {
        ...temp,
        products:newArr
      }
    }
    axios.post(
      `https://mim-super-shop-backend-6.onrender.com/api/updateorder/${id}`,
      {
        order: state.t_order[index].order,
      }
    );
    state.orders = state.t_order
    SetL("orders",state.orders)
    
    
    },
    AdminLogOut: (state, action)=>
  {
      state.admin = {}
      SetL("admin",state.admin)
  }
   
  },
  
  
});

export const {
  saveTempPro,
  SaveSotreData,
  AddWishList,
  RemoveFromWishList,
  ShowCart,
  AddItemInCart,
  RemoveItemFromCart,
  UpdateAmount,
  UpdateUser,
  LogOut,
  AddMyInfo,
  AddUser,
  ClearCart,
  TempOrder,
  UpdateProduct,
  DeleteOrder,
  UpdateOrder,
  AddProduct,
  DeleteProduct,
  AddAdmin,
  AdminLogOut
 
  
} = MimSuper.actions;

export default MimSuper.reducer;
