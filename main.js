// import 'index.css'

require([
    "esri/config", "esri/Map", "esri/views/MapView", "esri/widgets/Locate","esri/widgets/Expand", 
    "esri/widgets/Search", "esri/layers/FeatureLayer"
    ],(esriConfig, Map, MapView, Locate, Expand, Search, FeatureLayer) => {
  
      esriConfig.apiKey = "AAPTxy8BH1VEsoebNVZXo8HurHJHfSmD6Cm_uV3pceVBDTiGAuoxaiNeGNYE1FhZE4iS7OQGQaHf26579IbGOgWT6YA608K2YFeRi-fMX1ZwN7ytSFcC1EZ-rW4xikf9ZMlYfOyvdysX8Sf0kqyNBBq0d_HiW2S5VnGXklVJGUX_8q3JBWItTG5s-Q9hpTp6ddBgwM6bDnDuwjvwqC17LNXkkxZNt-PyTv1IjiVXGVLcDDk.AT1_vp0kXsvd";
    
      const map = new Map({
        basemap: "streets"
      });
      const view = new MapView({
          container: "viewDiv", // Reference to the DOM node that will contain the view
          map: map,
          center: [-82.3562, 29.6516],
          zoom: 15
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
        // Remember to turn on sharing
        url: "https://services.arcgis.com/LBbVDC0hKPAnLRpO/arcgis/rest/services/Pedestrian_Report_Test/FeatureServer"
      });

      map.add(layer);
    });


