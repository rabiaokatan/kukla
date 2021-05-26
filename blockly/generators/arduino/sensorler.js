
 'use strict';

 goog.provide('Blockly.Arduino.sensorler');
 
 goog.require('Blockly.Arduino');
 
 

Blockly.Arduino['sensor_ultrasonic'] = function(block) {
  var dropdown_soket = block.getFieldValue('soket');
  var code;
  if(dropdown_soket=="soket1"){

    code = 'digitalWrite(trigPin, LOW);  \ndelayMicroseconds(2); \digitalWrite(trigPin, HIGH); \ndelayMicroseconds(10); \ndigitalWrite(trigPin, LOW); \nduration = pulseIn(echoPin, HIGH); \ndistance = duration * 0.034 / 2;\n  return distance;';
    Blockly.Arduino.addVariable('echo','#define echoPin 12', true);
    Blockly.Arduino.addVariable('trig','#define trigPin 11', true);
    Blockly.Arduino.addVariable('duration','long duration;', true);
    Blockly.Arduino.addVariable('distance','int distance;', true);

    var setupCode = 'pinMode(trigPin,OUTPUT);\n  pinMode(echoPin,INPUT);  \n  Serial.begin(9600);\n';
    Blockly.Arduino.addSetup("sensorMesafe1", setupCode, true);
  }else if(dropdown_soket=="soket2"){
    code = 'digitalWrite(trigPin, LOW);  \ndelayMicroseconds(2); \digitalWrite(trigPin, HIGH); \ndelayMicroseconds(10); \ndigitalWrite(trigPin, LOW); \nduration = pulseIn(echoPin, HIGH); \ndistance = duration * 0.034 / 2;\n  return distance;';
    Blockly.Arduino.addVariable('echo','#define echoPin 13', true);
    Blockly.Arduino.addVariable('trig','#define trigPin A1', true);
    Blockly.Arduino.addVariable('duration','long duration;', true);
    Blockly.Arduino.addVariable('distance','int distance;', true);
    var setupCode = 'pinMode(trigPin,OUTPUT);\n  pinMode(echoPin,INPUT);  \n  Serial.begin(9600);\n';
    Blockly.Arduino.addSetup("sensorMesafe2", setupCode, true);
  }
  else if(dropdown_soket=="soket3"){
    code = 'digitalWrite(trigPin, LOW);  \ndelayMicroseconds(2); \digitalWrite(trigPin, HIGH); \ndelayMicroseconds(10); \ndigitalWrite(trigPin, LOW); \nduration = pulseIn(echoPin, HIGH); \ndistance = duration * 0.034 / 2;\n  return distance;';
    Blockly.Arduino.addVariable('echo','#define echoPin A2', true);
    Blockly.Arduino.addVariable('trig','#define trigPin A3', true);
    Blockly.Arduino.addVariable('duration','long duration;', true);
    Blockly.Arduino.addVariable('distance','int distance;', true);
    var setupCode = 'pinMode(trigPin,OUTPUT);\n  pinMode(echoPin,INPUT);  \n  Serial.begin(9600);\n';
        Blockly.Arduino.addSetup("sensorMesafe3", setupCode, true);
  }
  else if(dropdown_soket=="soket4"){
    code = 'digitalWrite(trigPin, LOW);  \ndelayMicroseconds(2); \digitalWrite(trigPin, HIGH); \ndelayMicroseconds(10); \ndigitalWrite(trigPin, LOW); \nduration = pulseIn(echoPin, HIGH); \ndistance = duration * 0.034 / 2;\n  return distance;';
    Blockly.Arduino.addVariable('echo','#define echoPin 2', true);
    Blockly.Arduino.addVariable('trig','#define trigPin 3', true);
    Blockly.Arduino.addVariable('duration','long duration;', true);
    Blockly.Arduino.addVariable('distance','int distance;', true);
    var setupCode = 'pinMode(trigPin,OUTPUT);\n  pinMode(echoPin,INPUT);  \n  Serial.begin(9600);\n';
    Blockly.Arduino.addSetup("sensorMesafe4", setupCode, true);
  }
  else if(dropdown_soket=="soket5"){
    code = 'digitalWrite(trigPin, LOW);  \ndelayMicroseconds(2); \digitalWrite(trigPin, HIGH); \ndelayMicroseconds(10); \ndigitalWrite(trigPin, LOW); \nduration = pulseIn(echoPin, HIGH); \ndistance = duration * 0.034 / 2;\n  return distance;';
    Blockly.Arduino.addVariable('echo','#define echoPin 17', true);
    Blockly.Arduino.addVariable('trig','#define trigPin 10', true);
    Blockly.Arduino.addVariable('duration','long duration;', true);
    Blockly.Arduino.addVariable('distance','int distance;', true);
    var setupCode = 'pinMode(trigPin,OUTPUT);\n  pinMode(echoPin,INPUT);  \n  Serial.begin(9600);\n';
    Blockly.Arduino.addSetup("sensorMesafe5", setupCode, true);
  }

  Blockly.Arduino.addFunction('sensormesafefonksiyon',' int mesafever(){\n'+code+'\n}');
 
  return  [' mesafever()', Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['hava_kalite_sensor'] = function(block) {
  Blockly.Arduino.addInclude('hava', '#include "Adafruit_SGP40.h"');
  Blockly.Arduino.addInclude('sicaklik', '#include <Wire.h>');
  Blockly.Arduino.addVariable('sgp','Adafruit_SGP40 sgp;', true);
  var setupCode = 'if (! sgp.begin()){while (1);}\n  delay(1000);\n';
  Blockly.Arduino.addSetup("sensor", setupCode, true);
  var code ="uint16_t raw; \nraw = sgp.measureRaw();  \ndelay(1000);\n  return raw;";
  Blockly.Arduino.addFunction('sensorhavakalitefonksiyon',' int havakaliteolc(){\n'+code+'\n}');
  return  [' havakaliteolc()', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['sicaklik_etkinlestir'] = function(block) {
  Blockly.Arduino.addInclude('stepper', '#include <SI7021.h>');
  Blockly.Arduino.addInclude('sicaklik', '#include <Wire.h>');
  Blockly.Arduino.addVariable('si','SI7021 sensor;', true);
  var setupCode = 'sensor.begin();  \n';
    Blockly.Arduino.addSetup("sensor", setupCode, true);
  var code = '';
  return code;
};

Blockly.Arduino['sicaklik_al'] = function(block) {
  
  var code = 'sensor.getCelsiusHundredths()/100';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['nem_al'] = function(block) {
  
  var code = 'sensor.getHumidityPercent()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['nolu_led_yak4'] = function(block) {
  var dropdown_led_durum = block.getFieldValue('led_durum');
  var setupCode = 'pinMode(4,OUTPUT); \n  ';
  Blockly.Arduino.addSetup("sensor", setupCode, true);
  var code;
  if(dropdown_led_durum=="ac"){
    code="digitalWrite(4, HIGH);";
  }else if(dropdown_led_durum=="kapa"){
    code="digitalWrite(4, LOW);";
  }
 
  return code;
};

Blockly.Arduino['buzzer'] = function(block) {
  var dropdown_buzzer = block.getFieldValue('buzzer');
  var code;
  var setupCode = 'pinMode(A0,OUTPUT); \n  ';
  Blockly.Arduino.addSetup("buzerSetup", setupCode, true);
  if(dropdown_buzzer=="kapali"){
    code="digitalWrite(A0, LOW);";
  }else if(dropdown_buzzer=="acik"){
    code="digitalWrite(A0, HIGH);";
  }
 
  return code;
};


Blockly.Arduino['isik_sensor'] = function(block) {
  var code="analogRead(A1)";

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['motor'] = function(block) {
  var dropdown_yon = block.getFieldValue('yon');
  var number_saniye = block.getFieldValue('saniye');
  var code;
  Blockly.Arduino.addVariable('PWMA','int PWMA = 5;', true);
  Blockly.Arduino.addVariable('AIN1','int AIN1 = 6;', true);
  Blockly.Arduino.addVariable('PWMB','int PWMB = 9;', true);
  Blockly.Arduino.addVariable('BIN1','int BIN1 = 7;', true);
  var setupCode = 'pinMode(PWMA, OUTPUT);  \n  pinMode(AIN1, OUTPUT); \n  pinMode(PWMB, OUTPUT); \n  pinMode(BIN1, OUTPUT); \n  delay(4000); \n';
  Blockly.Arduino.addSetup("sensor", setupCode, true);
  if(dropdown_yon=="ileri"){

    code = 'digitalWrite(AIN1, HIGH);  \nanalogWrite(PWMA, 65); \n digitalWrite(BIN1, HIGH); \nanalogWrite(PWMB, 71); \ndelay('+number_saniye+'*1650); \ndigitalWrite(AIN1, HIGH);  \nanalogWrite(PWMA, LOW);  \ndigitalWrite(BIN1, HIGH); \nanalogWrite(PWMB, LOW);  \ndelay(1000); \n';

  }else if(dropdown_yon=="saga"){

    code = 'digitalWrite(AIN1, HIGH);  \nanalogWrite(PWMA, 72);  \n digitalWrite(BIN1, HIGH); \nanalogWrite(PWMB, 0); \ndelay(1400); \ndigitalWrite(AIN1, HIGH);  \nanalogWrite(PWMA, LOW);  \ndigitalWrite(BIN1, HIGH); \nanalogWrite(PWMB, LOW);  \ndelay(1000); \n';

  }else if(dropdown_yon=="sola"){

    code = 'digitalWrite(AIN1, HIGH);  \nanalogWrite(PWMA, 0);  \n digitalWrite(BIN1, HIGH); \nanalogWrite(PWMB, 72); \ndelay(1600); \ndigitalWrite(AIN1, HIGH);  \nanalogWrite(PWMA, LOW);  \ndigitalWrite(BIN1, HIGH); \nanalogWrite(PWMB, LOW);  \ndelay(1000); \n';


  }else if(dropdown_yon=="git"){

    code = 'digitalWrite(AIN1, HIGH);  \nanalogWrite(PWMA, 61); \n digitalWrite(BIN1, HIGH); \nanalogWrite(PWMB, 71); \ndelay(10); \n';


  }else if(dropdown_yon=="dur"){

    code = 'digitalWrite(AIN1, HIGH);  \nanalogWrite(PWMA, LOW); \n digitalWrite(BIN1, HIGH); \nanalogWrite(PWMB, LOW); \ndelay(100); \n';


  }

  return code;
};


Blockly.Arduino['cizgi_izleme'] = function(block) {
  var dropdown_soket_verisi = block.getFieldValue('soket_verisi');

  Blockly.Arduino.addVariable('PWMA','int PWMA = 5;', true);
  Blockly.Arduino.addVariable('AIN1','int AIN1 = 6;', true);
  Blockly.Arduino.addVariable('PWMB','int PWMB = 9;', true);
  Blockly.Arduino.addVariable('BIN1','int BIN1 = 7;', true);

  Blockly.Arduino.addVariable('speed1','int speed1=50;', true);
  Blockly.Arduino.addVariable('speed2','int speed2=50;', true);
  

  var setupCode = 'pinMode(Sensor2,INPUT);\n  pinMode(Sensor1,INPUT); \n  pinMode(PWMA, OUTPUT);  \n  pinMode(AIN1, OUTPUT); \n  pinMode(PWMB, OUTPUT); \n  pinMode(BIN1, OUTPUT) \n  ';
  Blockly.Arduino.addSetup("Csensor", setupCode, true);
  var   code = 'while(digitalRead(Sensor2)==LOW){ speed2=speed2 + 5;}  \nwhile(digitalRead(Sensor1)==LOW){speed1=speed1 + 5;} \n digitalWrite(AIN1, HIGH); \nanalogWrite(PWMA, speed1); \ndigitalWrite(BIN1, HIGH); \nanalogWrite(PWMB, speed2); \ndelay(100)';

  if(dropdown_soket_verisi=="Csoket1"){

    Blockly.Arduino.addVariable('Sensor1','int Sensor1=11;', true);
    Blockly.Arduino.addVariable('Sensor2','int Sensor2=12;', true);
    
  }else if(dropdown_soket_verisi=="Csoket2"){
    Blockly.Arduino.addVariable('Sensor1','int Sensor1=13;', true);
    Blockly.Arduino.addVariable('Sensor2','int Sensor2=A1;', true);
   
  }
  else if(dropdown_soket_verisi=="Csoket3"){
    Blockly.Arduino.addVariable('Sensor1','int Sensor1=A2;', true);
    Blockly.Arduino.addVariable('Sensor2','int Sensor2=A3;', true);
  }
  else if(dropdown_soket_verisi=="Csoket4"){
    Blockly.Arduino.addVariable('Sensor1','int Sensor1=2;', true);
    Blockly.Arduino.addVariable('Sensor2','int Sensor2=3;', true);
  }
  else if(dropdown_soket_verisi=="Csoket5"){ 
    Blockly.Arduino.addVariable('Sensor1','int Sensor1=7;', true);
    Blockly.Arduino.addVariable('Sensor2','int Sensor2=10;', true);
  } 
 
 
  return code;
};