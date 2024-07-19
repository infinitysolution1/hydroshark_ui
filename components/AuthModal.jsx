"use client";
import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Login from "./AuthComponents/Login";
import Signup from "./AuthComponents/Signup";
import { useStore } from "@/utils/store";
import Image from "next/image";

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showAuthModal, setShowAuthModal } = useStore();
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    setIsOpen(showAuthModal.show);
  }, [showAuthModal]);

  const handleClose = () => {
    setShowAuthModal({ show: false });
    setShowSignup(false);
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } z-50 inset-0 flex items-center justify-center bg-black/10`}
    >
      <div className="bg-white w-3/12 min-h-[40vh] relative overflow-y-scroll  flex flex-col items-center shadow-xl py-[5vh]">
        <div className=" absolute right-4 top-4">
          <button
            onClick={() => {
              handleClose();
            }}
          >
            <IoCloseOutline className=" text-black text-xl" />
          </button>
        </div>

        <div className=" h-[10vh] w-[10vh] relative">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/hydroshark.png"}
            layout="fill"
            alt="hydroshark"
          />
        </div>
        <p className="text-3xl text-black my-4 font-bold">Hydroshark</p>
        {showSignup ? (
          <Signup />
        ) : (
          <Login
            onSignUp={() => {
              setShowSignup(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;