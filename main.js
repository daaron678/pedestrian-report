import './index.css'

require([
    "esri/config", "esri/Map", "esri/views/MapView", "esri/widgets/Locate","esri/widgets/Expand", 
    "esri/widgets/Search", "esri/layers/FeatureLayer"
    ],(esriConfig, Map, MapView, Locate, Expand, Search, FeatureLayer) => {
  
      esriConfig.apiKey = "AAPTxy8BH1VEsoebNVZXo8HurHJHfSmD6Cm_uV3pceVBDTiGAuoxaiNeGNYE1FhZE4iS7OQGQaHf26579IbGOgWT6YA608K2YFeRi-fMX1ZwN7ytSFcC1EZ-rW4xikf9ZMlYfOyvdysX8Sf0kqyNBBq0d_HiW2S5VnGXklVJGUX_8q3JBWItTG5s-Q9hpTp6ddBgwM6bDnDuwjvwqC17LNXkkxZNt-PyTv1IjiVXGVLcDDk.AT1_vp0kXsvd";
    
      const map = new Map({
        basemap: "satellite"
      });
      const view = new MapView({
          container: "viewDiv", // Reference to the DOM node that will contain the view
          map: map,
          center: [-81.3031, 29.0283],
          zoom: 10
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
      
      // Add the locate widget to the top left corner of the view
      view.ui.add(locateBtn, {
        position: "top-left"
      });

      view.ui.add(expand, {
            position: "bottom-right"
        });
      
      const layer = new FeatureLayer({ 
        // URL to the pedestrian survey
        url: "https://services.arcgis.com/LBbVDC0hKPAnLRpO/arcgis/rest/services/survey123_28d9d3b5ea7c4380b90419f9e8e22c4c_results/FeatureServer"
      });

      map.add(layer);
    });

console.log("Hello World!")