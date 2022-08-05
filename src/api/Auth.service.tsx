import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosClient from "./AxiosClient";
import { history } from "../helpers/history";
import { BehaviorSubject } from "rxjs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const authURL = "https://reqres.in/api/login";

const Auth = {
  currentUser: new BehaviorSubject(''),

  async login(user: any) {
    const response = await AxiosClient.post(authURL, user);
    console.log(response);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      this.currentUser.next(response.data.token);
      // window.location.href = "/";
      toast("Welcome!");
    }
    return response.data;
  },
  logout() {
    localStorage.removeItem("token");
    this.currentUser.next('');
    toast("You've just logout!");
    // window.location.href = "/";
  },
  register(email: any, password: any) {
    return AxiosClient.post(authURL + "register", {
      email,
      password,
    });
  },
  getCurrentUser() {
    // return (localStorage as any).getItem("token");
    return this.currentUser.asObservable();
  },
  //   isLogin(){
  //     let token = JSON.parse((localStorage as any).getItem("token"));
  //     if (token){
  //         return true
  //     } else return false
  //   }
};
export default Auth;
