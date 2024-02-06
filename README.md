# Assignment Bhumio
A nodejs project for OCR reading using tesseract.
## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Installing](#installing)
- [Usage](#usage)
- [Contributers](#contributers)

## About
It uses Tesseract OCR engine, to read handwritten'tick' marks on an image file and returns the output as a key-value pair where key denotes the line number where the tick was added and value denotes the response selected (yes/no/not sure).

## Getting Started
Clone the repository by using ``` git clone ``` command.

## Installing
Navigate to the projetc repository and install the required dependencies using ```npm i```

## Usage
Once the dependencies are installed nodemon will start running locally.
Make a POST request as shown here using POSTMAN
```
curl --location --request POST 'http://127.0.0.1:1667/upload' \
--form 'file=@"path/to/your/image/file"'
```
The response based on tessearct;s ocr interpretation will be sent as a response once the status is successful.
## Contributers
Mukhar Bajpai