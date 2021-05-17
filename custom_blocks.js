Blockly.Blocks['move'] = {
    init: function () {
        this.appendValueInput("move")
            .setCheck("Number")
            .appendField("move");
        this.appendDummyInput()
            .appendField("steps");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(178);
        this.setTooltip("step number");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['move'] = function (block) {
    var value_move = Blockly.JavaScript.valueToCode(block, 'move', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = moveright();
    return code;
};
 
 Blockly.Blocks['when_flag_clicked'] = {
    init: function() {
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
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

