import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment_2';
  value=""
  value_decrypted=""
  encryption_method="AES"
  decryption_method="AES"
  encryption_key="YourSecretKeyForEncryption"
  decryption_key = "YourSecretKeyForDescryption";


  encrypt(value : string) {
    
    if(this.encryption_method == "AES")
    this.value = CryptoJS.AES.encrypt(value, this.encryption_key.trim()).toString();
    else
    if(this.encryption_method == "3DES")
    this.value = CryptoJS.TripleDES.encrypt(value, this.encryption_key.trim()).toString();
    else
    if(this.encryption_method == "OTP")
    this.value = this.encryptOtp(value, this.encryption_key.trim());
    
  }

  decrypt(textToDecrypt : string){
    
    if(this.decryption_method == "AES")
    this.value_decrypted = CryptoJS.AES.decrypt(textToDecrypt, this.decryption_key.trim()).toString(CryptoJS.enc.Utf8);
    else
    if(this.decryption_method == "3DES")
    this.value_decrypted = CryptoJS.TripleDES.decrypt(textToDecrypt, this.decryption_key.trim()).toString(CryptoJS.enc.Utf8);
    else
    if(this.decryption_method == "OTP")
    this.value_decrypted = this.encryptOtp(textToDecrypt, this.encryption_key.trim());
   
  }


   encryptOtp(inpString:string, key:string)
{
   var inpString2 = inpString.split("");
   var key2 = key.split("")
    // Define XOR key
    // Any character value will work
    
    // calculate length of input string
    let len = inpString2.length;
     var i = 0;
    while(key2.length<inpString2.length){
      key2.push(key2[i])
      i++
    }
     //
    // perform XOR operation of key
    // with every character in string
    for (let i = 0; i < len; i++)
    {
        inpString2[i] = (String.fromCharCode((inpString2[i].charCodeAt(0)) ^ key2[i].charCodeAt(0)));
        
    }
    return  inpString2.join("");
}
 
}


