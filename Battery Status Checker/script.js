const chargingIcon = document.querySelector(".charging_icon");

const batteryLevel = document.querySelector(".battery_level");

const chargingBar = document.querySelector(".charging_bar");

const dischargingTime = document.querySelector(".discharging_time");

const otherInfo = document.querySelector(".other_info");

// Promise is called by battery

navigator.getBattery().then((battery) => {
  /* Updating all the battery information which is a combination of multiple functions */

  function updateAllBatteryInfo() {
    
    updateChargeInfo();

    updateLevelInfo();

    updateDischargingInfo();
  }

  //   Running as the promise returns battery

  updateAllBatteryInfo();

  //  Event Listener, when the charging status changes

  //  it checks that does your device is plugged in or not

  battery.addEventListener("chargingchange",() =>{ 
    updateAllBatteryInfo();
});

  //  Event Listener, when the Battery Level Changes

  battery.addEventListener("levelchange",() => {
    updateAllBatteryInfo();
  });

  //  Event Listener, when the discharging Time Change

  //  it checks that does your device is plugged in or not

  battery.addEventListener("dischargingtimechange", () => {
    updateAllBatteryInfo();
  });

  //   Updating the battery Level container and the charging bar width

  function updateLevelInfo() {
    batteryLevel.textContent = `${+(battery.level * 100)}%`; //instead of + you can use parseInt

    console.log("ParseInt Conversion:",typeof(parseInt(battery.level * 100)));
    console.log("+ operator Conversion:",typeof(+(battery.level * 100)));

    chargingBar.style.width = `${+(battery.level * 100)}%`;  //instead of + you can use parseInt
  }

  function updateChargeInfo() {
    //ternary operator for checking the battery is charging or not
    battery.charging
      ? ((chargingBar.style.animationIterationCount = "infinite"),
        (chargingIcon.style.display = "inline-flex"),
        (otherInfo.style.display = "none"))
      : ((chargingIcon.style.display = "none"),
        (otherInfo.style.display = "inline-flex"),
        (chargingBar.style.animationIterationCount = "initial"));
  }

  //   updating the Discharging Information 

  function updateDischargingInfo() {
    const dischargeTime = parseInt(battery.dischargingTime / 60) ? true : false;

    dischargeTime
      ? ((dischargingTime.textContent = `${parseInt(
          battery.dischargingTime / 60
        )} minutes`),
        (otherInfo.style.display = "flex"))
      : (otherInfo.style.display = "none");
  }
});