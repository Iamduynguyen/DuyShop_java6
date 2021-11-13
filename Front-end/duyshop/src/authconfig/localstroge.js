import React, { useEffect, useState } from 'react'

export const authenticate = (token) => {
    if (typeof window != undefined) {
        localStorage.setItem('token', JSON.stringify(token))
    }
  }
  export const isAuthenticated = () => {
    if (typeof window == 'undefined') return false;
        return JSON.parse(localStorage.getItem('token'));
  }
  export const signout = (next) => {
    localStorage.removeItem('token');
    next()
  }