'use strict';

goog.provide('Blockly.Blocks.sensorler');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['sensor_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://www.robotistan.com/hc-sr04-ultrasonik-mesafe-sensoru-29320-17-B.jpg", 40, 40, { alt: "*", flipRtl: "FALSE" }));
  
    this.appendDummyInput()
        .appendField("UltrasonicSensör")
        .appendField(new Blockly.FieldDropdown([
          ["soket1","soket1"], 
          ["soket2","soket2"], 
          ["soket3","soket3"], 
          ["soket4","soket4"], 
          ["soket5","soket5"]
        
        ]), "soket");
        this.setOutput(true,Blockly.Types.LARGE_NUMBER.output);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
 

  },
  getBlockType: function() {
    return Blockly.Types.LARGE_NUMBER;
  }
  
};



Blockly.Blocks['hava_kalite_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://www.robotistan.com/hava-kalite-sensor-karti-mq-135-31477-58-B.jpg", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("Hava Kalite Sensörü");
    this.setOutput(true, "String");
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  getBlockType: function() {
    return Blockly.Types.LARGE_NUMBER;
  }
};


Blockly.Blocks['sicaklik_etkinlestir'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://www.robocombo.com/Uploads/UrunResimleri/DHT11-Isi-ve-Nem-Sensor-Karti-6647.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Sıcaklık-Nem Sensörü Etkinleştir");
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['sicaklik_al'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sıcaklık Al");
    this.setOutput(true,Blockly.Types.LARGE_NUMBER.output);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  getBlockType: function() {
    return Blockly.Types.LARGE_NUMBER;
  }
};


Blockly.Blocks['nem_al'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Nem Al");
    this.setOutput(true,Blockly.Types.LARGE_NUMBER.output);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  getBlockType: function() {
    return Blockly.Types.LARGE_NUMBER;
  }
};

Blockly.Blocks['nolu_led_yak4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Led")
        .appendField(new Blockly.FieldDropdown([["AÇ","ac"], ["KAPAT","kapa"]]), "led_durum");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer")
        .appendField(new Blockly.FieldDropdown([["Kapalı","kapali"], ["Açık","acik"]]), "buzzer");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['isik_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Işık Sensörü");
    this.setOutput(true, Blockly.Types.LARGE_NUMBER.output);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  getBlockType: function() {
    return Blockly.Types.LARGE_NUMBER;
  }
};

Blockly.Blocks['motor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://static.generation-robots.com/10081-product_cover/spare-mbot-robot-motor.jpg", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("Motor")
        .appendField(new Blockly.FieldDropdown([["ileri","ileri"], ["sağa","saga"], ["sola","sola"], ["git","git"], ["dur","dur"]]), "yon")
        .appendField(new Blockly.FieldNumber(10, 0, 2000), "saniye");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['cizgi_izleme'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://www.robotizmo.net/Uploads/UrunResimleri/4lu-Cizgi-Izleyen-Sensor-9448.jpg", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("Çizgi İzle")
        .appendField(new Blockly.FieldDropdown([["soket1","Csoket1"], ["soket2","Csoket2"], ["soket3","Csoket3"], ["soket4","Csoket4"], ["soket5","Csoket5"]]), "soket_verisi");
    this.setOutput(true, "String");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};