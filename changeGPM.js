// *+*+*+*+*+*+*+*+*+*+*+ KEN IS COOL! *+*+*+*+*+*+*+*+*+*+*+*+*+*+

function changeGPM() {
  const printLocation = document.getElementById('printHere');
  const replayObj = JSON.parse(document.getElementById('originalReplay').value);
  const GPMMultiple = document.getElementById('multiple').value;
  replayObj.name = `${replayObj.name} gpm x ${GPMMultiple}`;
  replayObj.attackPatterns.forEach((attackObject) => {
    if (attackObject.chain !== false) { // if it is a chain attack object
      attackObject.chain.forEach((num, i) => {
        attackObject.chain[i] = Math.round(num / GPMMultiple);
      });
      attackObject.chainEndTime = Math.round(attackObject.chainEndTime / GPMMultiple);
    } else { // if it is a combo attack object
      attackObject.startTime = Math.round(attackObject.startTime / GPMMultiple);
    }
  });

  printLocation.innerHTML = JSON.stringify(replayObj);
  return replayObj;
}
