**Pedestrian Report Dashboard**

The pedestrian report is a dashboard concept designed for a transportation department. It will take in a survey for pedestrians to report issues such as a damaged sidewalk and display a map that can assign tasks to employees. To do this Esri Survey123 will be used and Esri Workforce will be used to display the map of assigned tasks. Esri Workforce allows users to filter based on assigned roles and feature attributes. This project will develop an automation to take new survey entries and update the Workforce web layout.The workflow is as follows:

user adds survey --> survey info is automatically added to database (webhook that executes a script with Workforce API) --> updated Workforce web layout is displayed

*Dashboard layout*

The dashboard will be a page with the Workforce app embedded as well as an 'Add survey' button that would allow transportation employees to add their own surveys when they are in the field and see any issues. The dashboard should automatically update when refreshed to add survey info to the Workforce map. 

*Webhook*

A webhook is used with Power Automate to update information whenever a survey is submitted. The process works where every new entry from Survey123 will be sent to a JSON file with the associated attributes. The JSON file can then be sent to a jupyter notebook that will use the workforce module from 'ArcGIS for Python API' to update the Workforce database with the new survey info. (A .JSON file would be generated every time a survey is submitted and Power Automate would connect the file to ArcGIS Data Pipeline which includes the jupyter notebook.)
See the docs for using the worforce module within ArrcGIS for Python API: 
https://developers.arcgis.com/python/latest/api-reference/arcgis.apps.workforce.html

*Database*

The schema of Workforce is explained here: 
https://doc.arcgis.com/en/workforce/android-phone/help/workforce-schema.htm#ESRI_SECTION1_EDB5E3592870494BAE5F829765C604FF.
The database will take this schema and build a CLI as an alternative way for employee admins to update and alter info on Workforce. The changes made will then be synced to display on workforce. Useful example scripts are provided by Esri in this Github notebook: https://github.com/Esri/workforce-scripts/blob/master/notebooks/examples/1%20-%20Configuring%20a%20Project.ipynb


--- Add this readme as a section on the dashboard, and embed the hyperlinks to the text. 
