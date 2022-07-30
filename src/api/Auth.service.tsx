import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosClient from "./AxiosClient";
import { history } from "../helpers/history";
import { BehaviorSubject } from "rxjs";

const authURL = "https://reqres.in/api/login";

const Auth = {
  currentUser: new BehaviorSubject(localStorage.token||null),

  async login(user: any) {
    const response = await AxiosClient.post(authURL, user);
    console.log(response);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      this.currentUser.next(localStorage.token);
      window.location.href = "/";
    }
    return response.data;
  },
  logout() {
    localStorage.removeItem("token");
    console.log("aaa");
    window.location.href = "/";
  },
  register(email: any, password: any) {
    return AxiosClient.post(authURL + "register", {
      email,
      password,
    });
  },
  getCurrentUser() {
    return (localStorage as any).getItem("token");
  },
  //   isLogin(){
  //     let token = JSON.parse((localStorage as any).getItem("token"));
  //     if (token){
  //         return true
  //     } else return false
  //   }
};
export default Auth;
