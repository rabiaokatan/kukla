Blockly.Blocks['move'] = {
    init: function() {
      this.appendValueInput("move")
          .setCheck("Number")
          .appendField("move");
      this.appendDummyInput()
          .appendField("steps to");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"], ["up","up"], ["down","down"]]), "direction");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(178);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['move'] = function(block) {
    var value_move = Blockly.JavaScript.valueToCode(block, 'move', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_direction = block.getFieldValue('direction');

    var method_name = dropdown_direction;
    var method_prefix = "move_";
 
    var code =window[method_prefix + method_name](value_move);
    return code;
  };

  //hatalı çalışıyor
  Blockly.Blocks['go_to'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("go to x:")
          .appendField(new Blockly.FieldTextInput(""), "x_pos")
          .appendField("y:")
          .appendField(new Blockly.FieldTextInput(""), "y_pos");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(178);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['go_to'] = function(block) {
    var text_x_pos = block.getFieldValue('x_pos');
    var text_y_pos = block.getFieldValue('y_pos');
    
    var code = myGamePiece.x=text_x_pos;
    var code= myGamePiece.y=text_y_pos;
    return code;
  };

Blockly.Blocks['when_flag_clicked'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("when")
            .appendField(new Blockly.FieldImage("https://scratch.mit.edu/static/assets/2e0c4790f8f9cf28e3c346b9cef0fcb6.svg", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("clicked");
        this.setInputsInline(false);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("when the flag clicked it starts the game");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['when_flag_clicked'] = function (block) {
  
    var code = "...\n";
    return code;
};


