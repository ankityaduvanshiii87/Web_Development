let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;
let isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;
console.log(isSecure ? "Secure" : "Unsafe");
