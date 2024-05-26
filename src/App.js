import React, { useState } from 'react';
import './App.css';
import rightarrow from './assets/img/icon/rightarrow.svg';
import baby from './assets/img/icon/baby.png';
import cat from './assets/img/icon/cat.png';
import hair from './assets/img/icon/hair.png';
import pink_sun from './assets/img/icon/pink_sun.png';
import sun from './assets/img/icon/sun.png';
import punk from './assets/img/icon/punk.png';
import kupluk from './assets/img/icon/kupluk.png';

  function App() {
    const [formStep, setFormStep] = useState(1);
    const [formData, setFormData] = useState(new FormData()); // State untuk menyimpan data formulir

    function handleNextClick(e) {
      e.preventDefault();
      const dataform = document.querySelector("form");
      const newData = new FormData(dataform);
      for (let [key, value] of newData.entries()) {
        formData.set(key, value); // Menambahkan data baru atau mengganti data yang sudah ada
      }
      setFormData(formData); // Menyimpan data formulir
      setFormStep(formStep + 1);
    }

    function handleBackClick(e) {
      e.preventDefault();
      setFormStep(formStep - 1);
    }

    function handleSubmit(e) {
      e.preventDefault();
      console.log("Form is being submitted");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      fetch(
        "https://script.google.com/macros/s/AKfycbzPssuM4H4M2avZ7-Xb1KFrqXyogqm463YUd8LtTD6zqzPqXwhSMcRzg5Lqi-eTUGz0Fw/exec",
        {
          method: "POST",
          body: formData
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Response from server:", data);
        })
        .catch((error) => {
          console.error("Error submitting the form:", error);
        });
    }

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown = () => {
      setIsDropdownVisible(!isDropdownVisible);
    };

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      setIsDropdownVisible(false); // Tutup dropdown setelah dipilih
      formData.set('Lokasi', event.target.value);
    };


    return (
      <>
        <div
          className="bg-cover bg-center min-h-screen flex items-center justify-center"
          style={{
            backgroundColor: 'rgb(250, 186, 240)',
          }}
        >
          <div className='text-blue-700'>
            <form onSubmit={formStep === 10 ? handleSubmit : handleNextClick}>
              {formStep === 1 && (
                <div>
                  <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg relative z-10 shadow-[5px_5px_0px_1px_#0025EF] text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
                    <img
                      src={baby}
                      alt="icon"
                      className="absolute -top-8 sm:-top-10 md:-top-12 lg:-top-14 left-1/2 transform -translate-x-1/2 w-10 sm:w-12 md:w-14 lg:w-16 rounded-full"
                    />

                    <div>
                      HELLO!
                    </div>
                    <div>
                      Congratulation, you are loved by Elvira. So, Elvira gonna make some surprise for you. Curious what it is? Let`s go next!
                    </div>
                  </div>


                  <img src={kupluk} className="w-full max-w-xs mx-auto" alt="Kupluk" />



                  <div className="flex justify-between max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                    <button
                      onClick={handleBackClick}
                      className="bg-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 sm:px-4 md:px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]"
                    >
                      Back
                    </button>
                    <button
                      className="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 sm:px-4 md:px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]"
                    >
                      <img src={rightarrow} alt="Next" className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                    </button>
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <>
                  <div>
                    <div className='space-y-4'>
                      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg relative z-10 shadow-[5px_5px_0px_1px_#0025EF] text-lg sm:text-xl md:text-2xl lg:text-3xl text-center space-y-4">
                        <img src={hair}
                          alt="Overlapping"
                          className="absolute -top-14 sm:-top-10 md:-top-12 lg:-top-14 left-1/2 transform -translate-x-1/2 w-20 sm:w-16 md:w-18 lg:w-20 rounded-full" />

                        <div>
                          But, before we start i know you love me. So tell me a wish or anything you want to say to me, or maybe some secret you want me to know
                        </div>
                      </div>

                      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg relative z-10 shadow-[5px_5px_0px_1px_#0025EF] text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
                      <textarea
                        name='Pesan'
                        className="w-full h-30 sm:h-38 md:h-48 lg:h-56 p-2 border-2 border-gray-300 rounded-lg resize-none"
                        placeholder="Tulis pesan kamu di sini..."
                      ></textarea>
                      </div>

                      <div className="flex justify-between max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                        <button onClick={handleBackClick} className="bg-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">Back</button>
                        <button className="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">
                          <img src={rightarrow} alt="Next" className='h-10 w-10' />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

            {formStep === 3 && (
              <div>
                <div className="max-w-sm mx-auto bg-white p-8 rounded-lg  relative z-10 shadow-[5px_5px_0px_1px_#0025EF] text-3xl text-center">
                  <img src={baby}
                    alt="Overlapping"
                    className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-16 rounded-full" />


                  <div>
                    WHICH ONE DO YOU PREFER?
                  </div>
                  <div>
                    Choose Wisely!
                  </div>
                </div>

                <div className="mb-5 max-w-sm mx-auto p-8 rounded-lg shadow-lg relative z-10">
                  <div className=" ">
                    <label className="cursor-pointer flex flex-col items-center">
                      <input type="radio" name="Pilihan" value="coffee" className="hidden peer" />
                      <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-blue-300 shadow-[5px_5px_0px_0px_#0025EF] bg-white text-center">
                        <span>Coffee</span>
                      </div>
                    </label>

                    <label className="cursor-pointer flex flex-col items-center">
                      <input type="radio" name="Pilihan" value="tea" className="hidden peer" />
                      <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-blue-300 shadow-[5px_5px_0px_0px_#0025EF] bg-white text-center">
                        <span>Tea</span>
                      </div>
                    </label>

                    <label className="cursor-pointer flex flex-col items-center">
                      <input type="radio" name="Pilihan" value="non-coffee" className="hidden peer" />
                      <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-blue-300 shadow-[5px_5px_0px_0px_#0025EF] bg-white text-center">
                        <span>Non - Coffee</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button onClick={handleBackClick} className="bg-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">Back</button>
                  <button className="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">
                    <img src={rightarrow} alt="Next" className='h-10 w-10' />
                  </button>
                </div>

              </div>
            )}
            {formStep === 4 && (
              <>
                <div>
                  <div className="max-w-sm mx-auto bg-white p-8 rounded-lg  relative z-10 shadow-[5px_5px_0px_1px_#0025EF] text-3xl text-center">
                    <img src={sun}
                      alt="Overlapping"
                      className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-16 rounded-full" />


                    <div>
                      WHICH COFFEE DO YOU PREFER?
                    </div>
                    <div>
                      Choose Wisely!
                    </div>
                  </div>

                  <div className="mb-5 max-w-sm mx-auto p-8 rounded-lg shadow-lg relative z-10">
                    <div className=" ">
                      <label className="cursor-pointer flex flex-col items-center">
                        <input type="radio" name="JenisKopi" value="strong" className="hidden peer" required />
                        <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-blue-300 shadow-[5px_5px_0px_0px_#0025EF] bg-white text-center">
                          <span>Strong Coffee</span>
                        </div>
                      </label>

                      <label className="cursor-pointer flex flex-col items-center">
                        <input type="radio" name="JenisKopi" value="light" className="hidden peer" required />
                        <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-blue-300 shadow-[5px_5px_0px_0px_#0025EF] bg-white text-center">
                          <span>Light Coffee</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button onClick={handleBackClick} className="bg-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">Back</button>
                    <button className="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">
                      <img src={rightarrow} alt="Next" className='h-10 w-10' />
                    </button>
                  </div>

                </div>
              </>
            )}
            {formStep === 5 && (
              <>
                <div className="max-w-sm mx-auto bg-blue-700 p-8 rounded-lg  relative z-10 shadow-[5px_5px_0px_1px_#F1EA42] text-3xl text-center text-yellow-200">
                  <div>
                    WHO ARE YOU?
                  </div>
                </div>

                <div className="mt-10 mb-5 max-w-sm mx-auto p-8 rounded-lg shadow-lg relative z-10 bg-yellow-300 text-center">
                  <img src={cat}
                    alt="Overlapping"
                    className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-16 rounded-full" />
                  <label htmlFor="nama" className="block mb-2 text-sm font-medium text-black">Tell me your name :</label>
                  <input type="text" name='Nama' id="nama" className="shadow-lg bg-yellow-300 border-gray-300 text-black text-center text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Gausah nama panjang" required />
                  ______________________________
                </div>

                <div className="flex justify-between">
                  <button onClick={handleBackClick} className="bg-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">Back</button>
                  <button className="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">
                    <img src={rightarrow} alt="Next" className='h-10 w-10' />
                  </button>
                </div>


              </>
            )}
            {formStep === 6 && (


              <>
                <div>
                  <div className="max-w-sm mx-auto bg-yellow-300 p-8 rounded-lg relative z-10 shadow-[5px_5px_0px_1px_#0025EF] text-3xl text-center">
                    <img
                      src={pink_sun}
                      alt="icon"
                      className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-16 rounded-full"
                    />
                    Do you like milk?
                  </div>

                  <div className="mb-5 max-w-sm mx-auto p-8 rounded-lg shadow-lg relative z-10">
                    <div className="flex justify-between space-x-4">
                      <label className="cursor-pointer flex flex-col items-center">
                        <input
                          type="radio"
                          name="Milk"
                          value="YES"
                          className="hidden peer"
                          required
                        />
                        <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-gray-100 shadow-[5px_5px_0px_0px_#F1EA42] bg-blue-700 text-center text-yellow-300">
                          <span>YES</span>
                        </div>
                      </label>

                      <label className="cursor-pointer flex flex-col items-center">
                        <input
                          type="radio"
                          name="Milk"
                          value="NO"
                          className="hidden peer"
                          required
                        />
                        <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-gray-100 shadow-[5px_5px_0px_0px_#F1EA42] bg-blue-700 text-center text-purple-300">
                          <span>No</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handleBackClick}
                      className="bg-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]"
                    >
                      Back
                    </button>
                    <button className="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">
                      <img src={rightarrow} alt="Next" className="h-10 w-10" />
                    </button>
                  </div>
                </div>
              </>


            )}
            {formStep === 7 && (


              <>
                <div>
                  <div className="max-w-sm mx-auto bg-yellow-300 p-8 rounded-lg relative z-10 shadow-[5px_5px_0px_1px_#0025EF] text-3xl text-center">
                    <img
                      src={baby}
                      alt="icon"
                      className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-16 rounded-full"
                    />
                    Do you like chocolate?
                  </div>

                  <div className="mb-5 max-w-sm mx-auto p-8 rounded-lg shadow-lg relative z-10">
                    <div className="flex justify-between space-x-4">
                      <label className="cursor-pointer flex flex-col items-center">
                        <input
                          type="radio"
                          name="Chocolate"
                          value="YES"
                          className="hidden peer"
                          required
                        />
                        <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-gray-100 shadow-[5px_5px_0px_0px_#F1EA42] bg-blue-700 text-center text-yellow-300">
                          <span>YES</span>
                        </div>
                      </label>

                      <label className="cursor-pointer flex flex-col items-center">
                        <input
                          type="radio"
                          name="Chocolate"
                          value="NO"
                          className="hidden peer"
                          required
                        />
                        <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-gray-100 shadow-[5px_5px_0px_0px_#F1EA42] bg-blue-700 text-center text-purple-300">
                          <span>No</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handleBackClick}
                      className="bg-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]"
                    >
                      Back
                    </button>
                    <button className="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">
                      <img src={rightarrow} alt="Next" className="h-10 w-10" />
                    </button>
                  </div>
                </div>
              </>


            )}

            {formStep === 8 && (


              <>
                <div>
                  <div className="max-w-sm mx-auto bg-yellow-300 p-8 rounded-lg relative z-10 shadow-[5px_5px_0px_1px_#0025EF] text-3xl text-center">
                    <img
                      src={hair}
                      alt="icon"
                      className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-16 rounded-full"
                    />
                    Do you like matcha?
                  </div>

                  <div className="mb-5 max-w-sm mx-auto p-8 rounded-lg shadow-lg relative z-10">
                    <div className="flex justify-between space-x-4">
                      <label className="cursor-pointer flex flex-col items-center">
                        <input
                          type="radio"
                          name="Matcha"
                          value="YES"
                          className="hidden peer"
                          required
                        />
                        <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-gray-100 shadow-[5px_5px_0px_0px_#F1EA42] bg-blue-700 text-center text-yellow-300">
                          <span>YES</span>
                        </div>
                      </label>

                      <label className="cursor-pointer flex flex-col items-center">
                        <input
                          type="radio"
                          name="Matcha"
                          value="NO"
                          className="hidden peer"
                          required
                        />
                        <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-gray-100 shadow-[5px_5px_0px_0px_#F1EA42] bg-blue-700 text-center text-purple-300">
                          <span>No</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handleBackClick}
                      className="bg-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]"
                    >
                      Back
                    </button>
                    <button className="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">
                      <img src={rightarrow} alt="Next" className="h-10 w-10" />
                    </button>
                  </div>
                </div>
              </>


            )}
            {formStep === 9 && (


              <>
                <div>
                  <div className="max-w-sm mx-auto bg-yellow-300 p-8 rounded-lg relative z-10 shadow-[5px_5px_0px_1px_#0025EF] text-3xl text-center">
                    <img
                      src={punk}
                      alt="icon"
                      className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-16 rounded-full"
                    />
                    Do you like Sour Fruit?
                  </div>

                  <div className="mb-5 max-w-sm mx-auto p-8 rounded-lg shadow-lg relative z-10">
                    <div className="flex justify-between space-x-4">
                      <label className="cursor-pointer flex flex-col items-center">
                        <input
                          type="radio"
                          name="SourFruit"
                          value="YES"
                          className="hidden peer"
                          required
                        />
                        <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-gray-100 shadow-[5px_5px_0px_0px_#F1EA42] bg-blue-700 text-center text-yellow-300">
                          <span>YES</span>
                        </div>
                      </label>

                      <label className="cursor-pointer flex flex-col items-center">
                        <input
                          type="radio"
                          name="SourFruit"
                          value="NO"
                          className="hidden peer"
                          required
                        />
                        <div className="w-24 h-10 mb-2 rounded-lg border-2 border-transparent peer-checked:bg-gray-100 shadow-[5px_5px_0px_0px_#F1EA42] bg-blue-700 text-center text-purple-300">
                          <span>No</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handleBackClick}
                      className="bg-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]"
                    >
                      Back
                    </button>
                    <button className="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">
                      <img src={rightarrow} alt="Next" className="h-10 w-10" />
                    </button>
                  </div>
                </div>
              </>


            )}

            {formStep === 10 && (


              <>
                <div className='space-y-8'>
                  <div className="max-w-sm mx-auto bg-blue-700 p-3 rounded-lg relative z-10 shadow-[5px_5px_0px_1px_#F1EA42] text-3xl text-center text-yellow-300">
                    Where Can I Found You?
                  </div>

                  <div className="mb-5 max-w-sm mx-auto p-8 rounded-lg shadow-lg relative z-10 bg-yellow-300">
                    <span>
                      So, basically I am gonna give you a surprise at 12.30 on Monday. So, tell me where are you at that time?
                    </span>
                  </div>

                  <div className="mb-5 max-w-sm mx-auto p-8 rounded-lg relative z-10 bg-yellow-300 shadow-[5px_5px_0px_0px_#0025EF] text-center">
                    <img
                      src={cat}
                      alt="icon"
                      className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-16 rounded-full"
                    />

                    <span>I'll Probably be at</span>

                    <div>
                      <button
                        id="dropdownRadioButton"
                        onClick={toggleDropdown}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        {selectedOption || 'Pilih Lokasi'} {/* Tampilkan value yang dipilih atau teks default */}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                      </button>

                      {isDropdownVisible && (
                        <div id="dropdownDefaultRadio" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                          <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                            <li>
                              <div className="flex items-center">
                                <input id="default-radio-1" type="radio" value="Selasar FIK" name="Lokasi" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={handleOptionChange} />
                                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Selasar FIK</label>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center">
                                <input id="default-radio-2" type="radio" value="Smile Garden" name="Lokasi" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={handleOptionChange} />
                                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Smile Garden</label>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center">
                                <input id="default-radio-3" type="radio" value="Sekret BEM FIK" name="Lokasi" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={handleOptionChange} />
                                <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sekret BEM FIK</label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handleBackClick}
                      className="bg-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]"
                    >
                      Back
                    </button>
                    <button className="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_0px_0px_#0025EF]">
                      <img src={rightarrow} alt="Next" className="h-10 w-10" />
                    </button>
                  </div> 
                </div>
              </>
            )}

            {formStep === 11 && (
              <>
                <div className="max-w-sm mx-auto bg-blue-700 p-3 rounded-lg relative z-10 shadow-[5px_5px_0px_1px_#F1EA42] text-3xl text-center text-yellow-300">
                  Thank You
                </div>
              </>
            )}


          </form>
        </div>
      </div>
    </>
  );
}

export default App;
