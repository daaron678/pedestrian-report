// import 'index.css'

require([
    "esri/config", "esri/Map", "esri/views/MapView", "esri/widgets/Locate","esri/widgets/Expand", 
    "esri/widgets/Search", "esri/layers/FeatureLayer"
    ],(esriConfig, Map, MapView, Locate, Expand, Search, FeatureLayer, Legend) => {
  
      esriConfig.apiKey = "AAPTxy8BH1VEsoebNVZXo8HurHJHfSmD6Cm_uV3pceVBDTiGAuoxaiNeGNYE1FhZE4iS7OQGQaHf26579IbGOgWT6YA608K2YFeRi-fMX1ZwN7ytSFcC1EZ-rW4xikf9ZMlYfOyvdysX8Sf0kqyNBBq0d_HiW2S5VnGXklVJGUX_8q3JBWItTG5s-Q9hpTp6ddBgwM6bDnDuwjvwqC17LNXkkxZNt-PyTv1IjiVXGVLcDDk.AT1_vp0kXsvd";
    
      const map = new Map({
        basemap: "streets-vector"
      });
      const view = new MapView({
          container: "viewDiv", // Reference to the DOM node that will contain the view
          map: map,
          center: [-82.3562, 29.6516],
          zoom: 12
      });

      const locateBtn = new Locate({
        view: view
      });

      const search = new Search({
        view: view
      });

      const expand = new Expand({
        view: view,
        content: search,
        expandIconClass: "esri-icon-search",
        expanded: false,
        closeOnEsc: true
      });
     
      view.ui.add(locateBtn, {
        position: "top-left"
      });

      view.ui.add(expand, {
            position: "bottom-right"
        });
      
      const layer = new FeatureLayer({ 
        // Hosted layer, view feature layer
        url: "https://services.arcgis.com/LBbVDC0hKPAnLRpO/arcgis/rest/services/survey123_4ecab1eca6f14ee0a1fe3a8592423460_form/FeatureServer"
      }); 

      map.add(layer);

      // const legend = new Legend({
      //   view: view, 
      //   layerInfos: [
      //     {
      //       layer: layer, 
      //       title: "Repair Type" 
      //     }
      //   ]
      // });

      // view.ui.add(legend, "bottom-left");

    });


