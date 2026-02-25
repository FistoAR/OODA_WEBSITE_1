$(document).ready(function () {
  
  const imageGroups = {
  1: [
    "./app_images/Magnet_Bonder_Adhesives_EV_Motors_Magnet_Fix/1.webp",
    "./app_images/Magnet_Bonder_Adhesives_EV_Motors_Magnet_Fix/2.webp",
    "./app_images/Magnet_Bonder_Adhesives_EV_Motors_Magnet_Fix/3.webp",
    "./app_images/Magnet_Bonder_Adhesives_EV_Motors_Magnet_Fix/4.webp",
    "./app_images/Magnet_Bonder_Adhesives_EV_Motors_Magnet_Fix/5.webp",
    "./app_images/Magnet_Bonder_Adhesives_EV_Motors_Magnet_Fix/6.webp",
    "./app_images/Magnet_Bonder_Adhesives_EV_Motors_Magnet_Fix/7.webp",
    "./app_images/Magnet_Bonder_Adhesives_EV_Motors_Magnet_Fix/8.webp",
  ],

  2: [
    "./app_images/Smart_Ring_Mobile_Phones_and_Smart_Watches_Assembly/1.webp",
    "./app_images/Smart_Ring_Mobile_Phones_and_Smart_Watches_Assembly/2.webp",
    "./app_images/Smart_Ring_Mobile_Phones_and_Smart_Watches_Assembly/3.webp",
    "./app_images/Smart_Ring_Mobile_Phones_and_Smart_Watches_Assembly/4.webp",
    "./app_images/Smart_Ring_Mobile_Phones_and_Smart_Watches_Assembly/5.webp",
    "./app_images/Smart_Ring_Mobile_Phones_and_Smart_Watches_Assembly/6.webp",
    "./app_images/Smart_Ring_Mobile_Phones_and_Smart_Watches_Assembly/7.webp",
    "./app_images/Smart_Ring_Mobile_Phones_and_Smart_Watches_Assembly/8.webp",
  ],

  3: [
    "./app_images/EV_Vehicle_and_Motor_Assembly_Applications/1.webp",
    "./app_images/EV_Vehicle_and_Motor_Assembly_Applications/2.webp",
    "./app_images/EV_Vehicle_and_Motor_Assembly_Applications/3.webp",
    "./app_images/EV_Vehicle_and_Motor_Assembly_Applications/4.webp",
    "./app_images/EV_Vehicle_and_Motor_Assembly_Applications/5.webp",
    "./app_images/EV_Vehicle_and_Motor_Assembly_Applications/6.webp",
    "./app_images/EV_Vehicle_and_Motor_Assembly_Applications/7.webp",
    "./app_images/EV_Vehicle_and_Motor_Assembly_Applications/8.webp",
  ],

  4: [
    "./app_images/Watch_Glass_Casing_Assembly/1.webp",
    "./app_images/Watch_Glass_Casing_Assembly/2.webp",
    "./app_images/Watch_Glass_Casing_Assembly/3.webp",
    "./app_images/Watch_Glass_Casing_Assembly/4.webp",
    "./app_images/Watch_Glass_Casing_Assembly/5.webp",
    "./app_images/Watch_Glass_Casing_Assembly/6.webp",
    "./app_images/Watch_Glass_Casing_Assembly/7.webp",
    "./app_images/Watch_Glass_Casing_Assembly/8.webp",
  ],

  5: [
    "./app_images/Drones_Flying_and_Assembly_Service/1.webp",
    "./app_images/Drones_Flying_and_Assembly_Service/2.webp",
    "./app_images/Drones_Flying_and_Assembly_Service/3.webp",
    "./app_images/Drones_Flying_and_Assembly_Service/4.webp",
    "./app_images/Drones_Flying_and_Assembly_Service/5.webp",
    "./app_images/Drones_Flying_and_Assembly_Service/6.webp",
    "./app_images/Drones_Flying_and_Assembly_Service/7.webp",
    "./app_images/Drones_Flying_and_Assembly_Service/8.webp",
  ],

  6: [
    "./app_images/Electronic_PCB_Potting_and_Conformal_Coating_Applications/1.webp",
    "./app_images/Electronic_PCB_Potting_and_Conformal_Coating_Applications/2.webp",
    "./app_images/Electronic_PCB_Potting_and_Conformal_Coating_Applications/3.webp",
    "./app_images/Electronic_PCB_Potting_and_Conformal_Coating_Applications/4.webp",
    "./app_images/Electronic_PCB_Potting_and_Conformal_Coating_Applications/5.webp",
    "./app_images/Electronic_PCB_Potting_and_Conformal_Coating_Applications/6.webp",
    "./app_images/Electronic_PCB_Potting_and_Conformal_Coating_Applications/7.webp",
    "./app_images/Electronic_PCB_Potting_and_Conformal_Coating_Applications/8.webp",
  ],

  7: [
    "./app_images/OODA_BOND_Nano_Coating_Spray_Score_Mark_Avoidance/1.webp",
    "./app_images/OODA_BOND_Nano_Coating_Spray_Score_Mark_Avoidance/2.webp",
    "./app_images/OODA_BOND_Nano_Coating_Spray_Score_Mark_Avoidance/3.webp",
    "./app_images/OODA_BOND_Nano_Coating_Spray_Score_Mark_Avoidance/4.webp",
    "./app_images/OODA_BOND_Nano_Coating_Spray_Score_Mark_Avoidance/5.webp",
    "./app_images/OODA_BOND_Nano_Coating_Spray_Score_Mark_Avoidance/6.webp",
    "./app_images/OODA_BOND_Nano_Coating_Spray_Score_Mark_Avoidance/7.webp",
    "./app_images/OODA_BOND_Nano_Coating_Spray_Score_Mark_Avoidance/8.webp",
  ],

  8: [
    "./app_images/Thermally_and_Electrically_Conductive_Adhesive_Applications/1.webp",
    "./app_images/Thermally_and_Electrically_Conductive_Adhesive_Applications/2.webp",
    "./app_images/Thermally_and_Electrically_Conductive_Adhesive_Applications/3.webp",
    "./app_images/Thermally_and_Electrically_Conductive_Adhesive_Applications/4.webp",
    "./app_images/Thermally_and_Electrically_Conductive_Adhesive_Applications/5.webp",
    "./app_images/Thermally_and_Electrically_Conductive_Adhesive_Applications/6.webp",
    "./app_images/Thermally_and_Electrically_Conductive_Adhesive_Applications/7.webp",
    "./app_images/Thermally_and_Electrically_Conductive_Adhesive_Applications/8.webp",
  ],

  9: [
    "./app_images/Medical_Device_Assembly_Applications/1.webp",
    "./app_images/Medical_Device_Assembly_Applications/2.webp",
    "./app_images/Medical_Device_Assembly_Applications/3.webp",
    "./app_images/Medical_Device_Assembly_Applications/4.webp",
    "./app_images/Medical_Device_Assembly_Applications/5.webp",
    "./app_images/Medical_Device_Assembly_Applications/6.webp",
    "./app_images/Medical_Device_Assembly_Applications/7.webp",
    "./app_images/Medical_Device_Assembly_Applications/8.webp",
  ],

  10: [
    "./app_images/OODA_BOND_Non-Drip_Grease_Ejector_Pin_Grease/1.webp",
    "./app_images/OODA_BOND_Non-Drip_Grease_Ejector_Pin_Grease/2.webp",
    "./app_images/OODA_BOND_Non-Drip_Grease_Ejector_Pin_Grease/3.webp",
    "./app_images/OODA_BOND_Non-Drip_Grease_Ejector_Pin_Grease/4.webp",
    "./app_images/OODA_BOND_Non-Drip_Grease_Ejector_Pin_Grease/5.webp",
    "./app_images/OODA_BOND_Non-Drip_Grease_Ejector_Pin_Grease/6.webp",
    "./app_images/OODA_BOND_Non-Drip_Grease_Ejector_Pin_Grease/7.webp",
    "./app_images/OODA_BOND_Non-Drip_Grease_Ejector_Pin_Grease/8.webp",
  ],

  11: [
    "./app_images/Home_Appliance_Product_Assembly_Adhesives/1.webp",
    "./app_images/Home_Appliance_Product_Assembly_Adhesives/2.webp",
    "./app_images/Home_Appliance_Product_Assembly_Adhesives/3.webp",
    "./app_images/Home_Appliance_Product_Assembly_Adhesives/4.webp",
    "./app_images/Home_Appliance_Product_Assembly_Adhesives/5.webp",
    "./app_images/Home_Appliance_Product_Assembly_Adhesives/6.webp",
    "./app_images/Home_Appliance_Product_Assembly_Adhesives/7.webp",
    "./app_images/Home_Appliance_Product_Assembly_Adhesives/8.webp",
  ],

  12: [
    "./app_images/SMT_PCB_MFG_Applications/1.webp",
    "./app_images/SMT_PCB_MFG_Applications/2.webp",
    "./app_images/SMT_PCB_MFG_Applications/3.webp",
    "./app_images/SMT_PCB_MFG_Applications/4.webp",
    "./app_images/SMT_PCB_MFG_Applications/5.webp",
    "./app_images/SMT_PCB_MFG_Applications/6.webp",
    "./app_images/SMT_PCB_MFG_Applications/7.webp",
    "./app_images/SMT_PCB_MFG_Applications/8.webp",
  ],

  13: [
    "./app_images/CCTV_Camera_Assembly_Applications/1.webp",
    "./app_images/CCTV_Camera_Assembly_Applications/2.webp",
    "./app_images/CCTV_Camera_Assembly_Applications/3.webp",
    "./app_images/CCTV_Camera_Assembly_Applications/4.webp",
    "./app_images/CCTV_Camera_Assembly_Applications/5.webp",
    "./app_images/CCTV_Camera_Assembly_Applications/6.webp",
    "./app_images/CCTV_Camera_Assembly_Applications/7.webp",
    "./app_images/CCTV_Camera_Assembly_Applications/8.webp",
  ],

  14: [
    "./app_images/Foundry_Applications/1.webp",
    "./app_images/Foundry_Applications/2.webp",
    "./app_images/Foundry_Applications/3.webp",
    "./app_images/Foundry_Applications/4.webp",
    "./app_images/Foundry_Applications/5.webp",
    "./app_images/Foundry_Applications/6.webp",
    "./app_images/Foundry_Applications/7.webp",
    "./app_images/Foundry_Applications/8.webp",
  ],

  15: [
    "./app_images/Injection_Molding_Nano_Coating_Applications/1.webp",
    "./app_images/Injection_Molding_Nano_Coating_Applications/2.webp",
    "./app_images/Injection_Molding_Nano_Coating_Applications/3.webp",
    "./app_images/Injection_Molding_Nano_Coating_Applications/4.webp",
    "./app_images/Injection_Molding_Nano_Coating_Applications/5.webp",
    "./app_images/Injection_Molding_Nano_Coating_Applications/6.webp",
    "./app_images/Injection_Molding_Nano_Coating_Applications/7.webp",
    "./app_images/Injection_Molding_Nano_Coating_Applications/8.webp",
  ],

  16: [
    "./app_images/Telecommunication_Antenna_and_SIM_Card_Applications/1.webp",
    "./app_images/Telecommunication_Antenna_and_SIM_Card_Applications/2.webp",
    "./app_images/Telecommunication_Antenna_and_SIM_Card_Applications/3.webp",
    "./app_images/Telecommunication_Antenna_and_SIM_Card_Applications/4.webp",
    "./app_images/Telecommunication_Antenna_and_SIM_Card_Applications/5.webp",
    "./app_images/Telecommunication_Antenna_and_SIM_Card_Applications/6.webp",
    "./app_images/Telecommunication_Antenna_and_SIM_Card_Applications/7.webp",
    "./app_images/Telecommunication_Antenna_and_SIM_Card_Applications/8.webp",
  ],

  17: [
    "./app_images/Pumps_and_Motors_Applications/1.webp",
    "./app_images/Pumps_and_Motors_Applications/2.webp",
    "./app_images/Pumps_and_Motors_Applications/3.webp",
    "./app_images/Pumps_and_Motors_Applications/4.webp",
    "./app_images/Pumps_and_Motors_Applications/5.webp",
    "./app_images/Pumps_and_Motors_Applications/6.webp",
    "./app_images/Pumps_and_Motors_Applications/7.webp",
    "./app_images/Pumps_and_Motors_Applications/8.webp",
  ],

  18: [
    "./app_images/Jewellery_Mold_Pattern_Making_Applications/1.webp",
    "./app_images/Jewellery_Mold_Pattern_Making_Applications/2.webp",
    "./app_images/Jewellery_Mold_Pattern_Making_Applications/3.webp",
    "./app_images/Jewellery_Mold_Pattern_Making_Applications/4.webp",
    "./app_images/Jewellery_Mold_Pattern_Making_Applications/5.webp",
    "./app_images/Jewellery_Mold_Pattern_Making_Applications/6.webp",
    "./app_images/Jewellery_Mold_Pattern_Making_Applications/7.webp",
    "./app_images/Jewellery_Mold_Pattern_Making_Applications/8.webp",
  ],

  19: [
    "./app_images/Silver_Conductive_Epoxies_for_Semiconductor_Chip_Applications/1.webp",
    "./app_images/Silver_Conductive_Epoxies_for_Semiconductor_Chip_Applications/2.webp",
    "./app_images/Silver_Conductive_Epoxies_for_Semiconductor_Chip_Applications/3.webp",
    "./app_images/Silver_Conductive_Epoxies_for_Semiconductor_Chip_Applications/4.webp",
    "./app_images/Silver_Conductive_Epoxies_for_Semiconductor_Chip_Applications/5.webp",
    "./app_images/Silver_Conductive_Epoxies_for_Semiconductor_Chip_Applications/6.webp",
    "./app_images/Silver_Conductive_Epoxies_for_Semiconductor_Chip_Applications/7.webp",
    "./app_images/Silver_Conductive_Epoxies_for_Semiconductor_Chip_Applications/8.webp",
  ],

  20: [
    "./app_images/Metal_Epoxy_Paste_and_Putty_Applications_SS_Bronze_Copper_Aluminium/1.webp",
    "./app_images/Metal_Epoxy_Paste_and_Putty_Applications_SS_Bronze_Copper_Aluminium/2.webp",
    "./app_images/Metal_Epoxy_Paste_and_Putty_Applications_SS_Bronze_Copper_Aluminium/3.webp",
    "./app_images/Metal_Epoxy_Paste_and_Putty_Applications_SS_Bronze_Copper_Aluminium/4.webp",
    "./app_images/Metal_Epoxy_Paste_and_Putty_Applications_SS_Bronze_Copper_Aluminium/5.webp",
    "./app_images/Metal_Epoxy_Paste_and_Putty_Applications_SS_Bronze_Copper_Aluminium/6.webp",
    "./app_images/Metal_Epoxy_Paste_and_Putty_Applications_SS_Bronze_Copper_Aluminium/7.webp",
    "./app_images/Metal_Epoxy_Paste_and_Putty_Applications_SS_Bronze_Copper_Aluminium/8.webp",
  ],

  21: [
    "./app_images/Construction_Equipment_Applications_Batching_Plant_Concrete_Pump_etc/1.webp",
    "./app_images/Construction_Equipment_Applications_Batching_Plant_Concrete_Pump_etc/2.webp",
    "./app_images/Construction_Equipment_Applications_Batching_Plant_Concrete_Pump_etc/3.webp",
    "./app_images/Construction_Equipment_Applications_Batching_Plant_Concrete_Pump_etc/4.webp",
    "./app_images/Construction_Equipment_Applications_Batching_Plant_Concrete_Pump_etc/5.webp",
    "./app_images/Construction_Equipment_Applications_Batching_Plant_Concrete_Pump_etc/6.webp",
    "./app_images/Construction_Equipment_Applications_Batching_Plant_Concrete_Pump_etc/7.webp",
    "./app_images/Construction_Equipment_Applications_Batching_Plant_Concrete_Pump_etc/8.webp",
  ],

  22: [
    "./app_images/Gearbox_and_Transmission_Applications/1.webp",
    "./app_images/Gearbox_and_Transmission_Applications/2.webp",
    "./app_images/Gearbox_and_Transmission_Applications/3.webp",
    "./app_images/Gearbox_and_Transmission_Applications/4.webp",
    "./app_images/Gearbox_and_Transmission_Applications/5.webp",
    "./app_images/Gearbox_and_Transmission_Applications/6.webp",
    "./app_images/Gearbox_and_Transmission_Applications/7.webp",
    "./app_images/Gearbox_and_Transmission_Applications/8.webp",
  ],

  23: [
    "./app_images/Lapping_Paste_for_Valves/1.webp",
    "./app_images/Lapping_Paste_for_Valves/2.webp",
    "./app_images/Lapping_Paste_for_Valves/3.webp",
    "./app_images/Lapping_Paste_for_Valves/4.webp",
    "./app_images/Lapping_Paste_for_Valves/5.webp",
    "./app_images/Lapping_Paste_for_Valves/6.webp",
    "./app_images/Lapping_Paste_for_Valves/7.webp",
    "./app_images/Lapping_Paste_for_Valves/8.webp",
  ],

  24: [
    "./app_images/LED_Light_Assembly_Adhesives/1.webp",
    "./app_images/LED_Light_Assembly_Adhesives/2.webp",
    "./app_images/LED_Light_Assembly_Adhesives/3.webp",
    "./app_images/LED_Light_Assembly_Adhesives/4.webp",
    "./app_images/LED_Light_Assembly_Adhesives/5.webp",
    "./app_images/LED_Light_Assembly_Adhesives/6.webp",
    "./app_images/LED_Light_Assembly_Adhesives/7.webp",
    "./app_images/LED_Light_Assembly_Adhesives/8.webp",
  ],

  25: [
    "./app_images/Lift_and_Elevator_Assembly_Adhesives/1.webp",
    "./app_images/Lift_and_Elevator_Assembly_Adhesives/2.webp",
    "./app_images/Lift_and_Elevator_Assembly_Adhesives/3.webp",
    "./app_images/Lift_and_Elevator_Assembly_Adhesives/4.webp",
    "./app_images/Lift_and_Elevator_Assembly_Adhesives/5.webp",
    "./app_images/Lift_and_Elevator_Assembly_Adhesives/6.webp",
    "./app_images/Lift_and_Elevator_Assembly_Adhesives/7.webp",
    "./app_images/Lift_and_Elevator_Assembly_Adhesives/8.webp",
  ],

  26: [
    "./app_images/Thermal_Sensor_Potting_Applications/1.webp",
    "./app_images/Thermal_Sensor_Potting_Applications/2.webp",
    "./app_images/Thermal_Sensor_Potting_Applications/3.webp",
    "./app_images/Thermal_Sensor_Potting_Applications/4.webp",
    "./app_images/Thermal_Sensor_Potting_Applications/5.webp",
    "./app_images/Thermal_Sensor_Potting_Applications/6.webp",
    "./app_images/Thermal_Sensor_Potting_Applications/7.webp",
    "./app_images/Thermal_Sensor_Potting_Applications/8.webp",
  ],

  27: [
    "./app_images/Waterproof_Coating_Applications/1.webp",
    "./app_images/Waterproof_Coating_Applications/2.webp",
    "./app_images/Waterproof_Coating_Applications/3.webp",
    "./app_images/Waterproof_Coating_Applications/4.webp",
    "./app_images/Waterproof_Coating_Applications/5.webp",
    "./app_images/Waterproof_Coating_Applications/6.webp",
    "./app_images/Waterproof_Coating_Applications/7.webp",
    "./app_images/Waterproof_Coating_Applications/8.webp",
  ],

  28: [
    "./app_images/ZTT_Electrical_Connector_Applications/1.webp",
    "./app_images/ZTT_Electrical_Connector_Applications/2.webp",
    "./app_images/ZTT_Electrical_Connector_Applications/3.webp",
    "./app_images/ZTT_Electrical_Connector_Applications/4.webp",
    "./app_images/ZTT_Electrical_Connector_Applications/5.webp",
    "./app_images/ZTT_Electrical_Connector_Applications/6.webp",
    "./app_images/ZTT_Electrical_Connector_Applications/7.webp",
    "./app_images/ZTT_Electrical_Connector_Applications/8.webp",
  ],

  29: [
    "./app_images/Name_Plate_Bonder_Applications/1.webp",
    "./app_images/Name_Plate_Bonder_Applications/2.webp",
    "./app_images/Name_Plate_Bonder_Applications/3.webp",
    "./app_images/Name_Plate_Bonder_Applications/4.webp",
    "./app_images/Name_Plate_Bonder_Applications/5.webp",
    "./app_images/Name_Plate_Bonder_Applications/6.webp",
    "./app_images/Name_Plate_Bonder_Applications/7.webp",
    "./app_images/Name_Plate_Bonder_Applications/8.webp",
  ],

  30: [
    "./app_images/Fuel_Filter_Assembly_Adhesives/1.webp",
    "./app_images/Fuel_Filter_Assembly_Adhesives/2.webp",
    "./app_images/Fuel_Filter_Assembly_Adhesives/3.webp",
    "./app_images/Fuel_Filter_Assembly_Adhesives/4.webp",
    "./app_images/Fuel_Filter_Assembly_Adhesives/5.webp",
    "./app_images/Fuel_Filter_Assembly_Adhesives/6.webp",
    "./app_images/Fuel_Filter_Assembly_Adhesives/7.webp",
    "./app_images/Fuel_Filter_Assembly_Adhesives/8.webp",
  ],

  31: [
    "./app_images/Automotive_Applications/1.webp",
    "./app_images/Automotive_Applications/2.webp",
    "./app_images/Automotive_Applications/3.webp",
    "./app_images/Automotive_Applications/4.webp",
    "./app_images/Automotive_Applications/5.webp",
    "./app_images/Automotive_Applications/6.webp",
    "./app_images/Automotive_Applications/7.webp",
    "./app_images/Automotive_Applications/8.webp",
  ],

  32: [
    "./app_images/OODA_BOND_Ceramic_Coating/1.webp",
    "./app_images/OODA_BOND_Ceramic_Coating/2.webp",
    "./app_images/OODA_BOND_Ceramic_Coating/3.webp",
    "./app_images/OODA_BOND_Ceramic_Coating/4.webp",
    "./app_images/OODA_BOND_Ceramic_Coating/5.webp",
    "./app_images/OODA_BOND_Ceramic_Coating/6.webp",
    "./app_images/OODA_BOND_Ceramic_Coating/7.webp",
    "./app_images/OODA_BOND_Ceramic_Coating/8.webp",
  ],

  33: [
    "./app_images/Pneumatic_and_Hydraulic_Equipment_Applications/1.webp",
    "./app_images/Pneumatic_and_Hydraulic_Equipment_Applications/2.webp",
    "./app_images/Pneumatic_and_Hydraulic_Equipment_Applications/3.webp",
    "./app_images/Pneumatic_and_Hydraulic_Equipment_Applications/4.webp",
    "./app_images/Pneumatic_and_Hydraulic_Equipment_Applications/5.webp",
    "./app_images/Pneumatic_and_Hydraulic_Equipment_Applications/6.webp",
    "./app_images/Pneumatic_and_Hydraulic_Equipment_Applications/7.webp",
    "./app_images/Pneumatic_and_Hydraulic_Equipment_Applications/8.webp",
  ],

  34: [
    "./app_images/Foundry_Sand_Core_Bonding_Applications/1.webp",
    "./app_images/Foundry_Sand_Core_Bonding_Applications/2.webp",
    "./app_images/Foundry_Sand_Core_Bonding_Applications/3.webp",
    "./app_images/Foundry_Sand_Core_Bonding_Applications/4.webp",
    "./app_images/Foundry_Sand_Core_Bonding_Applications/5.webp",
    "./app_images/Foundry_Sand_Core_Bonding_Applications/6.webp",
    "./app_images/Foundry_Sand_Core_Bonding_Applications/7.webp",
    "./app_images/Foundry_Sand_Core_Bonding_Applications/8.webp",
  ],

  35: [
    "./app_images/Aerospace_and_Space_Engine_Applications/1.webp",
    "./app_images/Aerospace_and_Space_Engine_Applications/2.webp",
    "./app_images/Aerospace_and_Space_Engine_Applications/3.webp",
    "./app_images/Aerospace_and_Space_Engine_Applications/4.webp",
    "./app_images/Aerospace_and_Space_Engine_Applications/5.webp",
    "./app_images/Aerospace_and_Space_Engine_Applications/6.webp",
    "./app_images/Aerospace_and_Space_Engine_Applications/7.webp",
    "./app_images/Aerospace_and_Space_Engine_Applications/8.webp",
  ],

  36: [
    "./app_images/Smartphone_Mobile_Applications/1.webp",
    "./app_images/Smartphone_Mobile_Applications/2.webp",
    "./app_images/Smartphone_Mobile_Applications/3.webp",
    "./app_images/Smartphone_Mobile_Applications/4.webp",
    "./app_images/Smartphone_Mobile_Applications/5.webp",
    "./app_images/Smartphone_Mobile_Applications/6.webp",
    "./app_images/Smartphone_Mobile_Applications/7.webp",
    "./app_images/Smartphone_Mobile_Applications/8.webp",
  ],
};



  const content = {
    1: [
      "Magnet bonder adhesives ensure precise and strong bonding of magnets in EV motors. They withstand vibration, high rotational forces, and temperature variations while providing electrical insulation and thermal stability for reliable motor performance.",
    ],

    2: [
      "Smart ring adhesives offer precise bonding for wearable electronics. They bond glass, metal, and plastic components, maintaining flexibility, biocompatibility, and moisture resistance for sensors, charging coils, and displays.",
    ],

    3: [
      "EV assembly adhesives bond motor housings, battery modules, and structural components. They resist vibration and thermal stress while providing electrical insulation for efficient powertrain assembly.",
    ],

    4: [
      "Watch adhesives bond glass and metal casings, offering scratch resistance, moisture sealing, and durability. They secure bezels and displays while preserving aesthetic appeal.",
    ],

    5: [
      "Drone adhesives provide lightweight, vibration-resistant bonding for motors, sensors, and electronics. They ensure flight stability, impact resistance, and durability for UAV assembly and maintenance.",
    ],

    6: [
      "PCB adhesives protect electronics from moisture, dust, vibration, and thermal stress. Suitable for consumer, automotive, and industrial circuits, they ensure reliable operation in harsh conditions.",
    ],

    7: [
      "Nano coatings prevent scratches and contamination on metals, plastics, and glass. They enhance surface durability without affecting adhesion or conductivity, reducing manufacturing defects.",
    ],

    8: [
      "Conductive adhesives bond metals, ceramics, and composites while ensuring heat dissipation and electrical connectivity. They are ideal for LEDs, semiconductors, and power electronics.",

    ],

    9: [
      "Medical adhesives bond plastics, metals, and glass in devices while remaining biocompatible, sterilizable, and moisture-resistant. They ensure safe, durable performance in medical applications.",

    ],

    10: [
      "Non-drip grease ensures smooth operation of ejector pins in injection molds. It resists heat and pressure, prevents contamination, extends mold life, and improves production consistency.",

    ],

    11: [

      "Appliance adhesives bond plastics, metals, and composites in washers, fridges, and kitchen appliances. They resist heat, moisture, and vibration while providing durable, long-lasting performance.",
    ],

    12: [
      "SMT adhesives secure components on PCBs, maintaining position during soldering. They resist thermal stress, ensure insulation, and support reliable assembly of consumer, automotive, and industrial electronics.",

    ],

    13: [
      "CCTV adhesives bond lenses, housings, and electronics. They provide vibration resistance, waterproofing, and thermal stability for reliable indoor and outdoor surveillance performance."
    ],

    14: [
      "Foundry adhesives bond cores, molds, and castings while withstanding high temperature and mechanical stress. They improve dimensional accuracy and surface finish for industrial metal casting.",

    ],

    15: [
      "Nano coatings improve mold release, reduce wear, and prevent defects. They enhance precision, surface quality, and mold longevity in plastic and composite manufacturing processes.",

    ],

    16: [
      "Telecom adhesives secure antenna modules, SIM trays, and electronic connectors. They resist thermal cycling and moisture while maintaining signal integrity and device reliability.",

    ],

    17: [
      "Pump and motor adhesives bond metal, plastic, and composite components. They resist vibration, temperature changes, and chemical exposure, ensuring durable, long-term performance.",

    ],

    18: [
      "Jewellery adhesives bond wax, metal, and resin patterns with precision. They resist thermal changes and maintain accuracy, ensuring flawless casting and high-quality finished pieces.",

    ],

    19: [
      "Silver epoxies provide low-resistance electrical bonding for semiconductors. They ensure thermal stability and strong adhesion for ICs, sensors, and microelectronic devices.",

    ],

    20: [
      "Metal epoxy paste and putty adhesives bond and repair stainless steel, bronze, copper, and aluminum. They provide mechanical strength, corrosion resistance, and thermal stability for industrial maintenance and fabrication.",
    ],

    21: [
      "Construction equipment adhesives bond metal, plastic, and composite components. They resist vibration, abrasion, and chemicals, enhancing durability and safety in heavy machinery.",
    ],

    22: [
      "Gearbox and transmission adhesives bond gears, housings, and shafts. They reduce vibration, maintain alignment, and resist torque stress for reliable automotive and industrial transmissions.",
    ],

    23: [
      "Lapping paste ensures precise valve surface finishing, improving sealing and flow. It provides uniform material removal, corrosion resistance, and optimal valve performance.",
    ],

    24: [
      "LED light assembly adhesives bond chips, lenses, and housings. They provide thermal management, vibration resistance, and optical clarity for durable, energy-efficient lighting solutions.",
    ],

    25: [
      "Lift and elevator assembly adhesives bond structural components and sensors. They resist vibration, temperature changes, and mechanical stress, ensuring safe and reliable lift operation.",
    ],

    26: [
      "Thermal sensor potting adhesives protect sensors from moisture, dust, and vibration. They provide thermal conductivity, mechanical stability, and accurate performance in automotive and industrial systems.",
    ],

    27: [
      "Waterproof coatings protect metals, plastics, and composites from moisture and corrosion. They provide thin, flexible, and durable protection for electronics and industrial components.",
    ],

    28: [
      "Electrical connector adhesives ensure strong bonding, insulation, and durability. They resist vibration, temperature, and moisture, maintaining reliable electrical connections in industrial and automotive systems.",
    ],

    29: [
      "Nameplate bonder adhesives permanently attach metal, plastic, and printed labels to appliances, machinery, and vehicles. They provide weather resistance, chemical stability, and tamper-proof bonding.",
    ],

    30: [
      "Fuel filter assembly adhesives bond filter media, seal end caps, and secure housings in automotive and industrial fuel systems. They resist chemicals and high pressures while maintaining structural integrity.",
    ],

    31: [
      "Automotive application adhesives serve structural bonding, hem flange sealing, NVH damping, and trim attachment throughout vehicle assembly. They reduce weight, improve crashworthiness, and enable multi-material joining of steel, aluminum, composites, and plastics.",
    ],

    32: [
      "OODA BOND ceramic coatings provide high-temperature protection, chemical resistance, and surface durability for metals, glass, and composites in industrial, automotive, and aerospace applications.",
    ],

    33: [
      "Pneumatic and hydraulic adhesives bond valves, cylinders, and fittings. They resist high pressure, vibration, and chemicals, ensuring reliable long-term equipment performance.",
    ],

    34: [
      "Foundry sand core bonding adhesives secure mold components and bind sand particles in metal casting. They provide thermal resistance, structural integrity, and precise mold shaping for high-quality castings.",
    ],

    35: [
      "Aerospace and space adhesives bond structural, electronic, and thermal components. They meet vacuum stability, radiation resistance, and extreme temperature cycling requirements, providing high strength-to-weight ratios and long-term reliability in aircraft, satellites, and spacecraft.",
    ],

    36: [
      "Smartphone adhesives bond displays, batteries, and internal components. They resist vibration, moisture, and heat, ensuring durable assembly and reliable performance in mobile devices.",
    ],

  };

  const appCards = document.querySelectorAll(".application-card-container");
  const mobappCards = document.querySelectorAll(".mob-sec-grid-card");

  const allCards = [...appCards, ...mobappCards];

  allCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate-in");
    }, index * 250);
  });

  $(".div-button").each(function () {
    $(this).on("click", function () {
      $(".div-button").removeClass("active");
      $(this).addClass("active");

      const dataID = $(this).data("id");
      const images = imageGroups[dataID];
      const contents = content[dataID];
      $(".service-content").removeClass("visible").html(contents);

      setTimeout(() => {
        $(".service-content").addClass("visible");
      }, 400);

      if (images && images.length > 0) {
        const targetImgs = document.querySelectorAll(
          ".application-card-container img"
        );
        const mobtargetImgs = document.querySelectorAll(
          ".mob-sec-grid-card img"
        );
        targetImgs.forEach((imgEl, idx) => {
          if (images[idx]) {
            imgEl.src = images[idx];
          }
        });

        mobtargetImgs.forEach((imgEl, idx) => {
          if (images[idx]) {
            imgEl.src = images[idx];
          }
        });

        const headingText = $(this).text().trim();
        $(".top-cont h1").text(headingText);
      }

      if (mobappCards) {
        for (let i = 0; i < appCards.length; i++) {
          mobappCards[i].classList.remove("animate-in");
        }
        mobappCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("animate-in");
          }, index * 250);
        });
      }

      for (let i = 0; i < appCards.length; i++) {
        appCards[i].classList.remove("animate-in");
      }

      appCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("animate-in");
        }, index * 250);
      });

      document.querySelector(".sidebar").classList.toggle("sidebar-show");
    });
  });
});

const menubtn = document.getElementById("menu");
menubtn.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebar-show");
});

const closebtn = document.getElementById("close-btn");
closebtn.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebar-show");
});
