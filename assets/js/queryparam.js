function querySt(ji) {

    hu = window.location.search.substring(1);
    gy = hu.split("&");

    for (i=0;i<gy.length;i++) {
        ft = gy[i].split("=");
        if (ft[0] == ji) {
            return ft[1];
        }
    }
}

function useQueryParams() {
  var endpointUrl = querySt("endpoint-url");
  document.getElementById('endpointURL').value = endpointUrl ? endpointUrl : "";

  var chargePointId = querySt("chargepoint-id");
  document.getElementById('chargePointId').value = chargePointId ? chargePointId : "";
}
