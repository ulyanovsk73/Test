
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
var button = document.querySelector('.button');
 
function setupSynth() {
  window.synth = new Tone.Synth({
    oscillator: {
      type: 'sine',
      modulationFrequency: 0.5
    },
    envelope: {
      attack: 0,
      decay: 0.2,
      sustain: 0,
      release: 0.5,
    }
  }).toMaster();
}
 
function boopMe() {
  if (!window.synth) {
    setupSynth();
  }
  
  window.synth.triggerAttackRelease(600, '9n');
}
 
button.addEventListener('touchstart', function(e) {
  e.stopPropagation();
  e.preventDefault();
  boopMe();
});
button.addEventListener('mousedown', boopMe);