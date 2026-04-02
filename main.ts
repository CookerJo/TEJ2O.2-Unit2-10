/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Josiah
 * Created on: March 2026
 * This program will change to the color to depending on the light level
*/

//variables
let lightLevels: number = 0
const myNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

//setup
basic.showIcon(IconNames.Happy)
myNeopixelStrip.clear()
myNeopixelStrip.show()

// code for lighting up neopixels
input.onButtonPressed(Button.A, function () {
    lightLevels = input.lightLevel()

    // shows the current light level
    basic.showNumber(lightLevels)
    myNeopixelStrip.clear()

// if lightlevel is greater then 52 the color turns red 
  if (lightLevels > 52) {
    myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  }

// if lightlevel is greater then 104 the color turns red 
  if (lightLevels > 104) {
    myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
  }

// if lightlevel is greater then 156 the color turns red 
  if (lightLevels > 156) {
    myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
  }
    
// if lightlevel is greater then 208 the color turns red 
  if (lightLevels > 208) {
    myNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
  }
    myNeopixelStrip.show()
})
