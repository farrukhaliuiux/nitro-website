let url =
  "https://api.coingecko.com/api/v3/coins/markets?ids=nitro-league&vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
fetch(url)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    // console.log(data);
    data.map(function (item) {
      let nitroPrice = item.current_price;
      let nitroVolumn = item.total_volume;
      let mkcapPrice = (nitroPrice * 43333333);
      let rMkt = mkcapPrice.toFixed(0);
      let nitroPercent = item.price_change_percentage_24h;
      let nitroFinalPres = nitroPercent.toFixed(1);

      let nitroPriceElements = document.getElementsByClassName("nitroleague-price");
      for(var i = 0, length = nitroPriceElements.length; i < length; i++) {
        nitroPriceElements[i].textContent = "$" + nitroPrice;
      }

      let nitroVolumeElements = document.getElementsByClassName("nitro-volumn");
      for(var i = 0, length = nitroVolumeElements.length; i < length; i++) {
        nitroVolumeElements[i].textContent = "$" + nitroVolumn;
      }

      let nitroMKTPrice = document.getElementsByClassName("nitroMKT-price");
      for(var i = 0, length = nitroMKTPrice.length; i < length; i++) {
        nitroMKTPrice[i].textContent = "$" + rMkt;
      }

      if(Math.sign(nitroFinalPres) === -1) {
        let nitroPreWithoutMinus = nitroFinalPres.toString().replace('-','');
        let svgElement = document.getElementsByClassName("percent-svg");
        for(var i = 0, length = svgElement.length; i < length; i++) {
          svgElement[i].style.transform = 'rotate(180deg)';
        }

        let percent = document.getElementsByClassName("n-current-value");
        for(var i = 0, length = percent.length; i < length; i++) {
          percent[i].style.color = "#fa0339";
        }

        let svgElementPath = document.getElementsByClassName("percent-svg-path");
        for(var i = 0, length = svgElementPath.length; i < length; i++) {
          svgElementPath[i].setAttribute("fill", "#fa0339");
        }

        let nitroCoinPercent = document.getElementsByClassName("nitroCoin-percent");
        for(var i = 0, length = nitroCoinPercent.length; i < length; i++) {
          nitroCoinPercent[i].textContent = nitroPreWithoutMinus + "%";
        }

      } else {
        let nitroPreWithoutMinus = nitroFinalPres.toString().replace('-','');

        let svgElement = document.getElementsByClassName("percent-svg");
        for(var i = 0, length = svgElement.length; i < length; i++) {
          svgElement[i].style.transform = 'rotate(0deg)';
        }

        let percent = document.getElementsByClassName("n-current-value");
        for(var i = 0, length = percent.length; i < length; i++) {
          percent[i].style.color = "#00BD1E";
        }

        let svgElementPath = document.getElementsByClassName("percent-svg-path");
        for(var i = 0, length = svgElementPath.length; i < length; i++) {
          svgElementPath[i].setAttribute("fill", "#00BD1E");
        }

        let nitroCoinPercent = document.getElementsByClassName("nitroCoin-percent");
        for(var i = 0, length = nitroCoinPercent.length; i < length; i++) {
          nitroCoinPercent[i].textContent = nitroPreWithoutMinus + "%";
        }
      }

    });
  });

function refresh() {
  // make Ajax call here, inside the callback call:
  setTimeout(refresh, 1800000);
  // ...
  fetch(url)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      // console.log(data);
      data.map(function (item) {
        let nitroPrice = item.current_price;
        let nitroVolumn = item.total_volume;
        let mkcapPrice = (nitroPrice * 43333333);
        let rMkt = mkcapPrice.toFixed(0);
        let nitroPercent = item.price_change_percentage_24h;
        let nitroFinalPres = nitroPercent.toFixed(1);

        let nitroPriceElements = document.getElementsByClassName("nitroleague-price");
        for(var i = 0, length = nitroPriceElements.length; i < length; i++) {
          nitroPriceElements[i].textContent = "$" + nitroPrice;
        }

        let nitroVolumeElements = document.getElementsByClassName("nitro-volumn");
        for(var i = 0, length = nitroVolumeElements.length; i < length; i++) {
          nitroVolumeElements[i].textContent = "$" + nitroVolumn;
        }

        let nitroMKTPrice = document.getElementsByClassName("nitroMKT-price");
        for(var i = 0, length = nitroMKTPrice.length; i < length; i++) {
          nitroMKTPrice[i].textContent = "$" + rMkt;
        }

        if(Math.sign(nitroFinalPres) === -1) {
          let nitroPreWithoutMinus = nitroFinalPres.toString().replace('-','');
          let svgElement = document.getElementsByClassName("percent-svg");
          for(var i = 0, length = svgElement.length; i < length; i++) {
            svgElement[i].style.transform = 'rotate(180deg)';
          }

          let percent = document.getElementsByClassName("n-current-value");
          for(var i = 0, length = percent.length; i < length; i++) {
            percent[i].style.color = "#fa0339";
          }

          let svgElementPath = document.getElementsByClassName("percent-svg-path");
          for(var i = 0, length = svgElementPath.length; i < length; i++) {
            svgElementPath[i].setAttribute("fill", "#fa0339");
          }

          let nitroCoinPercent = document.getElementsByClassName("nitroCoin-percent");
          for(var i = 0, length = nitroCoinPercent.length; i < length; i++) {
            nitroCoinPercent[i].textContent = nitroPreWithoutMinus + "%";
          }
        } else {
          let nitroPreWithoutMinus = nitroFinalPres.toString().replace('-','');

          let svgElement = document.getElementsByClassName("percent-svg");
          for(var i = 0, length = svgElement.length; i < length; i++) {
            svgElement[i].style.transform = 'rotate(0deg)';
          }

          let percent = document.getElementsByClassName("n-current-value");
          for(var i = 0, length = percent.length; i < length; i++) {
            percent[i].style.color = "#00BD1E";
          }

          let svgElementPath = document.getElementsByClassName("percent-svg-path");
          for(var i = 0, length = svgElementPath.length; i < length; i++) {
            svgElementPath[i].setAttribute("fill", "#00BD1E");
          }

          let nitroCoinPercent = document.getElementsByClassName("nitroCoin-percent");
          for(var i = 0, length = nitroCoinPercent.length; i < length; i++) {
            nitroCoinPercent[i].textContent = nitroPreWithoutMinus + "%";
          }
        }
      });
    });
}

// initial call, or just call refresh directly
setTimeout(refresh, 1800000);
