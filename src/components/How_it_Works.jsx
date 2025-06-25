import React from 'react';

const How_it_Works = () => {
    return (
        <div>
              <section class=" py-20 mulish ">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold  mb-4">How It Works</h2>
          <p class="  mx-auto mb-12">
            Find your true passion in just a few easy steps. Our platform will tie with the community you are lokking for!!
          </p>

          <div class="grid md:grid-cols-3 gap-10">
            <div class=" p-8 rounded-2xl shadow hover:shadow-xl hover:scale-105  duration-300 transition ">
              <div class="text-blue-600 text-4xl mb-4 hover:bg-amber-200">🔍</div>
              <h3 class="text-xl font-semibold mb-2">1. Browse  Groups</h3>
              <p class="">
                Explore groups tailored to your interest and skill from
                
              </p>
            </div>

            <div class="p-8 rounded-2xl shadow hover:shadow-xl transition hover:scale-105  duration-300">
              <div class="text-green-600 text-4xl mb-4 hover:bg-amber-200">📝</div>
              <h3 class="text-xl font-semibold mb-2">2.select</h3>
              <p class="">
                select a group or create group
              </p>
            </div>

            <div class=" p-8 rounded-2xl shadow hover:shadow-xl transition hover:scale-105 hover:bg-amber-100 duration-300">
              <div class="text-purple-600 text-4xl mb-4 hover:bg-amber-200">🎯</div>
              <h3 class="text-xl font-semibold mb-2">3.Spread your Group among others</h3>
              <p class="">
                enjoy the interaction with the community  people and explore the journey of learning 
              </p>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default How_it_Works;