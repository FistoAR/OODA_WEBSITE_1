$(document).ready(function () {
  const imageGroups = {
    1: [
      "./Images/smart ring Service/1.webp",
      "./Images/smart ring Service/2.webp",
      "./Images/smart ring Service/3.webp",
      "./Images/smart ring Service/4.webp",
      "./Images/smart ring Service/5.webp",
      "./Images/smart ring Service/6.webp",
      "./Images/smart ring Service/7.webp",
      "./Images/smart ring Service/8.webp",
    ],
    2: [
      "./Images/EV Vechicles Applications Service/1.webp",
      "./Images/EV Vechicles Applications Service/2.webp",
      "./Images/EV Vechicles Applications Service/3.webp",
      "./Images/EV Vechicles Applications Service/4.webp",
      "./Images/EV Vechicles Applications Service/5.webp",
      "./Images/EV Vechicles Applications Service/6.webp",
      "./Images/EV Vechicles Applications Service/7.webp",
      "./Images/EV Vechicles Applications Service/8.webp",
    ],
    3: [
      "./Images/Electronic PCB Potting Service/1.webp",
      "./Images/Electronic PCB Potting Service/2.webp",
      "./Images/Electronic PCB Potting Service/3.webp",
      "./Images/Electronic PCB Potting Service/4.webp",
      "./Images/Electronic PCB Potting Service/5.webp",
      "./Images/Electronic PCB Potting Service/6.webp",
      "./Images/Electronic PCB Potting Service/7.webp",
      "./Images/Electronic PCB Potting Service/8.webp",
    ],
    4: [
      "./Images/Thermaly conductive Service/1.webp",
      "./Images/Thermaly conductive Service/2.webp",
      "./Images/Thermaly conductive Service/3.webp",
      "./Images/Thermaly conductive Service/4.webp",
      "./Images/Thermaly conductive Service/5.webp",
      "./Images/Thermaly conductive Service/6.webp",
      "./Images/Thermaly conductive Service/7.webp",
      "./Images/Thermaly conductive Service/8.webp",
    ],
    5: [
      "./Images/Medical device Service/1.webp",
      "./Images/Medical device Service/2.webp",
      "./Images/Medical device Service/3.webp",
      "./Images/Medical device Service/4.webp",
      "./Images/Medical device Service/5.webp",
      "./Images/Medical device Service/6.webp",
      "./Images/Medical device Service/7.webp",
      "./Images/Medical device Service/8.webp",
    ],
    6: [
      "./Images/Home Appliances Service/1.webp",
      "./Images/Home Appliances Service/2.webp",
      "./Images/Home Appliances Service/3.webp",
      "./Images/Home Appliances Service/4.webp",
      "./Images/Home Appliances Service/5.webp",
      "./Images/Home Appliances Service/6.webp",
      "./Images/Home Appliances Service/7.webp",
      "./Images/Home Appliances Service/8.webp",
    ],
    7: [
        './Images/Silver conductive Epoxies Service/1.webp',
        './Images/Silver conductive Epoxies Service/2.webp',
        './Images/Silver conductive Epoxies Service/3.webp',
        './Images/Silver conductive Epoxies Service/4.webp',
        './Images/Silver conductive Epoxies Service/5.webp',
        './Images/Silver conductive Epoxies Service/6.webp',
        './Images/Silver conductive Epoxies Service/7.webp',
        './Images/Silver conductive Epoxies Service/8.webp',
    ],
    8: [
      "./Images/SMT PCB MFG Service/01.webp",
      "./Images/SMT PCB MFG Service/02.webp",
      "./Images/SMT PCB MFG Service/03.webp",
      "./Images/SMT PCB MFG Service/04.webp",
      "./Images/SMT PCB MFG Service/05.webp",
      "./Images/SMT PCB MFG Service/06.webp",
      "./Images/SMT PCB MFG Service/07.webp",
      "./Images/SMT PCB MFG Service/08.webp",
    ],
    9: [
      "./Images/CCTV Camera Assembly Service/01.webp",
      "./Images/CCTV Camera Assembly Service/02.webp",
      "./Images/CCTV Camera Assembly Service/03.webp",
      "./Images/CCTV Camera Assembly Service/04.webp",
      "./Images/CCTV Camera Assembly Service/05.webp",
      "./Images/CCTV Camera Assembly Service/06.webp",
      "./Images/CCTV Camera Assembly Service/07.webp",
      "./Images/CCTV Camera Assembly Service/08.webp",
    ],
    10: [
      "./Images/Injection Molding Nano Service/01.webp",
      "./Images/Injection Molding Nano Service/02.webp",
      "./Images/Injection Molding Nano Service/03.webp",
      "./Images/Injection Molding Nano Service/04.webp",
      "./Images/Injection Molding Nano Service/05.webp",
      "./Images/Injection Molding Nano Service/06.webp",
      "./Images/Injection Molding Nano Service/07.webp",
      "./Images/Injection Molding Nano Service/08.webp",
    ],
    // 11: [
    //     './Images/Telecommunication Antena Service-11/CCTV_camera_bonding Services_1.webp',
    //     './Images/Telecommunication Antena Service-11/CCTV_camera_bonding Services_2.webp',
    //     './Images/Telecommunication Antena Service-11/CCTV_camera_bonding Services_3.webp',
    //     './Images/Telecommunication Antena Service-11/CCTV_camera_bonding Services_4.webp',
    //     './Images/Telecommunication Antena Service-11/CCTV_camera_bonding Services_5.webp',
    //     './Images/Telecommunication Antena Service-11/CCTV_camera_bonding Services_6.webp',
    //     './Images/Telecommunication Antena Service-11/CCTV_camera_bonding Services_7.webp',
    //     './Images/Telecommunication Antena Service-11/CCTV_camera_bonding Services_8.webp'
    // ],
    12: [
      "./Images/Pumps and Motors Service/01.webp",
      "./Images/Pumps and Motors Service/02.webp",
      "./Images/Pumps and Motors Service/03.webp",
      "./Images/Pumps and Motors Service/04.webp",
      "./Images/Pumps and Motors Service/05.webp",
      "./Images/Pumps and Motors Service/06.webp",
      "./Images/Pumps and Motors Service/07.webp",
      "./Images/Pumps and Motors Service/08.webp",
    ],
    13: [
      "./Images/Jwellery Mold Pattern Making Service/01.webp",
      "./Images/Jwellery Mold Pattern Making Service/02.webp",
      "./Images/Jwellery Mold Pattern Making Service/03.webp",
      "./Images/Jwellery Mold Pattern Making Service/04.webp",
      "./Images/Jwellery Mold Pattern Making Service/05.webp",
      "./Images/Jwellery Mold Pattern Making Service/06.webp",
      "./Images/Jwellery Mold Pattern Making Service/07.webp",
      "./Images/Jwellery Mold Pattern Making Service/08.webp",
    ],
    14: [
      "./Images/construction equipment Service/1.webp",
      "./Images/construction equipment Service/2.webp",
      "./Images/construction equipment Service/3.webp",
      "./Images/construction equipment Service/4.webp",
      "./Images/construction equipment Service/5.webp",
      "./Images/construction equipment Service/6.webp",
      "./Images/construction equipment Service/7.webp",
      "./Images/construction equipment Service/8.webp",
    ],
    15: [
      "./Images/gear box transmissions Service/1.webp",
      "./Images/gear box transmissions Service/2.webp",
      "./Images/gear box transmissions Service/3.webp",
      "./Images/gear box transmissions Service/4.webp",
      "./Images/gear box transmissions Service/5.webp",
      "./Images/gear box transmissions Service/6.webp",
      "./Images/gear box transmissions Service/7.webp",
      "./Images/gear box transmissions Service/8.webp",
    ],
    16: [
      "./Images/Lapping paste for valves Service/1.webp",
      "./Images/Lapping paste for valves Service/2.webp",
      "./Images/Lapping paste for valves Service/3.webp",
      "./Images/Lapping paste for valves Service/4.webp",
      "./Images/Lapping paste for valves Service/5.webp",
      "./Images/Lapping paste for valves Service/6.webp",
      "./Images/Lapping paste for valves Service/7.webp",
      "./Images/Lapping paste for valves Service/8.webp",
    ],
    17: [
      "./Images/LED Light adhsives Service/1.webp",
      "./Images/LED Light adhsives Service/2.webp",
      "./Images/LED Light adhsives Service/3.webp",
      "./Images/LED Light adhsives Service/4.webp",
      "./Images/LED Light adhsives Service/5.webp",
      "./Images/LED Light adhsives Service/6.webp",
      "./Images/LED Light adhsives Service/7.webp",
      "./Images/LED Light adhsives Service/8.webp",
    ],
    18: [
      "./Images/Lift & Elevators ashesives Service/1.webp",
      "./Images/Lift & Elevators ashesives Service/2.webp",
      "./Images/Lift & Elevators ashesives Service/3.webp",
      "./Images/Lift & Elevators ashesives Service/4.webp",
      "./Images/Lift & Elevators ashesives Service/5.webp",
      "./Images/Lift & Elevators ashesives Service/6.webp",
      "./Images/Lift & Elevators ashesives Service/7.webp",
      "./Images/Lift & Elevators ashesives Service/8.webp",
    ],
    19: [
      "./Images/THERMAL SENSOR POTTINGS Service/1.webp",
      "./Images/THERMAL SENSOR POTTINGS Service/2.webp",
      "./Images/THERMAL SENSOR POTTINGS Service/3.webp",
      "./Images/THERMAL SENSOR POTTINGS Service/4.webp",
      "./Images/THERMAL SENSOR POTTINGS Service/5.webp",
      "./Images/THERMAL SENSOR POTTINGS Service/6.webp",
      "./Images/THERMAL SENSOR POTTINGS Service/7.webp",
      "./Images/THERMAL SENSOR POTTINGS Service/8.webp",
    ],
    20: [
      "./Images/DRONES -FLYING -ASSEMBLY Service/1.webp",
      "./Images/DRONES -FLYING -ASSEMBLY Service/2.webp",
      "./Images/DRONES -FLYING -ASSEMBLY Service/3.webp",
      "./Images/DRONES -FLYING -ASSEMBLY Service/4.webp",
      "./Images/DRONES -FLYING -ASSEMBLY Service/5.webp",
      "./Images/DRONES -FLYING -ASSEMBLY Service/7.webp",
      "./Images/DRONES -FLYING -ASSEMBLY Service/6.webp",
      "./Images/DRONES -FLYING -ASSEMBLY Service/8.webp",
    ],
    21: [
      "./Images/WATCH  GLASS CASING Service/1.webp",
      "./Images/WATCH  GLASS CASING Service/2.webp",
      "./Images/WATCH  GLASS CASING Service/3.webp",
      "./Images/WATCH  GLASS CASING Service/4.webp",
      "./Images/WATCH  GLASS CASING Service/5.webp",
      "./Images/WATCH  GLASS CASING Service/6.webp",
      "./Images/WATCH  GLASS CASING Service/7.webp",
      "./Images/WATCH  GLASS CASING Service/8.webp",
    ],

    22: [
      "./Images/water proof coating Service/1.webp",
      "./Images/water proof coating Service/2.webp",
      "./Images/water proof coating Service/3.webp",
      "./Images/water proof coating Service/4.webp",
      "./Images/water proof coating Service/5.webp",
      "./Images/water proof coating Service/6.webp",
      "./Images/water proof coating Service/7.webp",
      "./Images/water proof coating Service/8.webp",
    ],

    23: [
      "./Images/ztt electrical connnectors Service/1.webp",
      "./Images/ztt electrical connnectors Service/2.webp",
      "./Images/ztt electrical connnectors Service/3.webp",
      "./Images/ztt electrical connnectors Service/4.webp",
      "./Images/ztt electrical connnectors Service/5.webp",
      "./Images/ztt electrical connnectors Service/6.webp",
      "./Images/ztt electrical connnectors Service/7.webp",
      "./Images/ztt electrical connnectors Service/8.webp",
    ],
    24: [
      "./Images/Name Plate Bonder Service/1.webp",
      "./Images/Name Plate Bonder Service/2.webp",
      "./Images/Name Plate Bonder Service/3.webp",
      "./Images/Name Plate Bonder Service/4.webp",
      "./Images/Name Plate Bonder Service/5.webp",
      "./Images/Name Plate Bonder Service/6.webp",
      "./Images/Name Plate Bonder Service/7.webp",
      "./Images/Name Plate Bonder Service/8.webp",
    ],
    25: [
      "./Images/Fuel filter assemblly adhesives Service/1.webp",
      "./Images/Fuel filter assemblly adhesives Service/2.webp",
      "./Images/Fuel filter assemblly adhesives Service/3.webp",
      "./Images/Fuel filter assemblly adhesives Service/4.webp",
      "./Images/Fuel filter assemblly adhesives Service/5.webp",
      "./Images/Fuel filter assemblly adhesives Service/6.webp",
      "./Images/Fuel filter assemblly adhesives Service/7.webp",
      "./Images/Fuel filter assemblly adhesives Service/8.webp",
    ],
    26: [
      "./Images/Automotive applications Service/1.webp",
      "./Images/Automotive applications Service/2.webp",
      "./Images/Automotive applications Service/3.webp",
      "./Images/Automotive applications Service/4.webp",
      "./Images/Automotive applications Service/5.webp",
      "./Images/Automotive applications Service/6.webp",
      "./Images/Automotive applications Service/7.webp",
      "./Images/Automotive applications Service/8.webp",
    ],
    27: [
        './Images/OODA BOND CERAMIC Service/injection_mold_ejector_services_1.webp',
        './Images/OODA BOND CERAMIC Service/injection_mold_ejector_services_2.webp',
        './Images/OODA BOND CERAMIC Service/injection_mold_ejector_services_3.webp',
        './Images/OODA BOND CERAMIC Service/injection_mold_ejector_services_4.webp',
        './Images/OODA BOND CERAMIC Service/injection_mold_ejector_services_5.webp',
        './Images/OODA BOND CERAMIC Service/injection_mold_ejector_services_6.webp',
        './Images/OODA BOND CERAMIC Service/injection_mold_ejector_services_7.webp',
        './Images/OODA BOND CERAMIC Service/injection_mold_ejector_services_8.webp',
    ],
    28: [
        './Images/Pnematic and Hydraulic Equipments/injection_mold_ejector_services_1.webp',
        './Images/Pnematic and Hydraulic Equipments/injection_mold_ejector_services_2.webp',
        './Images/Pnematic and Hydraulic Equipments/injection_mold_ejector_services_3.webp',
        './Images/Pnematic and Hydraulic Equipments/injection_mold_ejector_services_4.webp',
        './Images/Pnematic and Hydraulic Equipments/injection_mold_ejector_services_5.webp',
        './Images/Pnematic and Hydraulic Equipments/injection_mold_ejector_services_6.webp',
        './Images/Pnematic and Hydraulic Equipments/injection_mold_ejector_services_7.webp',
        './Images/Pnematic and Hydraulic Equipments/injection_mold_ejector_services_8.webp',
    ],
    29: [
      "./Images/Foundry Sand core Bonding Service/1.webp",
      "./Images/Foundry Sand core Bonding Service/2.webp",
      "./Images/Foundry Sand core Bonding Service/3.webp",
      "./Images/Foundry Sand core Bonding Service/4.webp",
      "./Images/Foundry Sand core Bonding Service/5.webp",
      "./Images/Foundry Sand core Bonding Service/6.webp",
      "./Images/Foundry Sand core Bonding Service/7.webp",
      "./Images/Foundry Sand core Bonding Service/8.webp",
    ],
    30: [
      "./Images/Aero space and space Service/1.webp",
      "./Images/Aero space and space Service/2.webp",
      "./Images/Aero space and space Service/3.webp",
      "./Images/Aero space and space Service/4.webp",
      "./Images/Aero space and space Service/5.webp",
      "./Images/Aero space and space Service/6.webp",
      "./Images/Aero space and space Service/7.webp",
      "./Images/Aero space and space Service/8.webp",
    ],
  };

  const content = {
    1: [
      "Smart ring bonding adhesives provide precision assembly solutions for wearable electronics. These specialized adhesives bond glass, metal, and plastic components while maintaining flexibility for comfortable wear. They offer biocompatibility, moisture resistance, and durability for sensors, charging coils, and display attachments. Used in health monitoring devices, they ensure reliable performance in continuous skin contact applications.",
    ],

    2: [
      "EV vehicle adhesives are engineered for electric vehicle battery assembly, thermal management, and structural bonding. They provide high thermal conductivity, electrical insulation, and vibration damping. These adhesives bond battery cells, seal housings, and attach sensors while withstanding extreme temperatures. Critical for range, safety, and performance, they're essential in modern electric mobility manufacturing.",
    ],

    3: [
      "Electronic PCB potting compounds encapsulate printed circuit boards to protect against moisture, dust, vibration, and thermal shock. These epoxy, silicone, or polyurethane resins insulate components, prevent short circuits, and enhance durability. Widely used in automotive electronics, industrial controls, LED drivers, and power supplies, they extend product life in harsh environments.",
    ],

    4: [
      "Thermally conductive adhesives transfer heat while bonding components in electronics, LED lighting, and power devices. They contain ceramic or metal fillers for efficient thermal management without electrical conductivity. Used for heat sink attachment, chip bonding, and thermal interface applications, they improve performance, prevent overheating, and extend component lifespan in high-power applications.",
    ],

    5: [
      "Medical device adhesives meet stringent biocompatibility and sterilization standards for surgical instruments, diagnostic equipment, and patient care devices. They bond plastics, metals, and silicones with cytotoxicity testing compliance. Used in catheters, syringes, wearable monitors, and implantable components, they ensure patient safety and reliable performance in healthcare environments.",
    ],

    6: [
      "Home appliance adhesives bond and seal components in refrigerators, washing machines, ovens, and small appliances. They provide heat resistance, vibration damping, and chemical stability for motors, control panels, door seals, and decorative trim. These adhesives improve energy efficiency, reduce noise, and enhance durability while meeting safety standards for household environments.",
    ],

    7: [
    ],

    8: [
      "SMT PCB manufacturing adhesives secure surface-mount components during wave soldering and reflow processes. These thermally stable adhesives prevent component movement, reduce defects, and improve yield rates. Compatible with lead-free soldering, they're essential in electronics assembly for smartphones, computers, automotive electronics, and industrial control systems requiring precision and reliability.",

    ],

    9: [
      "CCTV camera assembly adhesives bond lenses, sensors, housings, and circuit boards in surveillance equipment. They provide optical clarity, weather resistance, and vibration stability for both dome and bullet cameras. UV-curing and structural adhesives ensure precise alignment, electromagnetic shielding, and long-term reliability in security systems for indoor and outdoor monitoring applications.",

    ],

    10: [
      "Injection molding nano coatings create ultra-smooth, anti-stick mold surfaces that improve part release and reduce cycle times. These advanced coatings prevent polymer adhesion, eliminate scoring marks, and extend tool life. Used in precision plastic manufacturing for automotive, electronics, and consumer goods, they enhance surface quality while reducing maintenance and production costs.",

    ],

    // 11: [

    //   "Jewelry mold pattern making adhesives bond wax patterns, secure investment casting molds, and assemble metal components. They provide clean removal, high-temperature resistance for burnout, and precision bonding for intricate designs. Used in gold, silver, and platinum jewelry manufacturing, they enable detailed craftsmanship while maintaining quality in casting and finishing processes.",
    // ],

    12: [
      "Pump and motor adhesives provide sealing, bonding, and protection for impellers, housings, rotors, and stators. They resist water, chemicals, oils, and high temperatures while damping vibration. Used in submersible pumps, HVAC systems, and industrial motors, these adhesives improve efficiency, prevent leakage, and extend service life in continuous-duty applications.",

    ],

    13: [
    ],

    14: [
      "Construction equipment adhesives bond and seal components in excavators, loaders, and heavy machinery. They provide impact resistance, weatherproofing, and structural strength for cab assembly, hydraulic systems, and panel attachment. These industrial-grade adhesives reduce welding, dampen vibration, and improve durability in demanding off-road and construction site environments.",

    ],

    15: [
      "Gearbox transmission adhesives seal housings, retain bearings, and lock threaded fasteners in automotive and industrial gearboxes. They prevent oil leakage, eliminate fretting corrosion, and withstand high torque loads. Anaerobic sealants and threadlockers ensure reliable power transmission, reduce maintenance, and extend service intervals in manual, automatic, and CVT transmission systems.",

    ],

    16: [
      "Lapping paste for valve grinding contains fine abrasive particles suspended in grease for precision surface finishing. Used in automotive engine valve seating, it creates leak-proof seals between valve faces and seats. This compound removes imperfections, ensures proper compression, and improves engine performance in automotive repair, marine engines, and industrial machinery maintenance.",

    ],

    17: [
      "LED light adhesives bond chips to heat sinks, seal housings, and encapsulate circuits in solid-state lighting. They provide thermal conductivity, optical clarity, and UV stability for indoor and outdoor fixtures. Used in residential, commercial, and automotive lighting, these adhesives enhance brightness, prevent moisture ingress, and ensure long-term performance in energy-efficient illumination.",

    ],

    18: [
      "Lift and elevator adhesives bond decorative panels, secure control systems, and seal door assemblies in vertical transportation. They provide fire resistance, vibration damping, and acoustic insulation for safe, quiet operation. Used in passenger elevators, freight lifts, and escalators, these structural adhesives meet safety codes while improving aesthetics and reducing installation time.",

    ],

    19: [
      "Thermal sensor potting compounds encapsulate temperature probes, thermocouples, and RTD sensors for protection and accurate readings. They provide moisture sealing, electrical insulation, and thermal stability from -40°C to 200°C. Used in HVAC, automotive, and industrial process control, these compounds ensure sensor reliability, prevent drift, and extend calibration intervals in critical monitoring applications.",

    ],

    20: [
      "Drone assembly adhesives bond carbon fiber frames, secure motors, attach propellers, and seal electronic housings in UAVs. They provide lightweight, high-strength bonds with vibration resistance and weather protection. Used in commercial, agricultural, and recreational drones, these adhesives reduce weight, improve flight stability, and ensure reliable performance in aerial applications.",
    ],

    21: [
      "Watch glass casing adhesives bond sapphire crystal, mineral glass, and acrylic displays to metal or plastic watch cases. They provide optical clarity, water resistance, and shock absorption for timepiece assembly. UV-curing adhesives enable precise positioning and rapid production. Used in luxury and sports watches, they ensure hermetic sealing and maintain aesthetic quality.",

    ],

    22: [
      "Waterproof coating compounds create impermeable barriers on electronics, textiles, wood, and metal surfaces. They repel water, prevent corrosion, and protect against environmental damage. Silicone, polyurethane, and acrylic formulations suit different substrates. Used in smartphones, outdoor gear, marine equipment, and building materials, they extend product life in wet conditions.",
    ],

    23: [
      "ZTT electrical connector adhesives seal and insulate terminal blocks, wire connections, and junction boxes. They prevent moisture ingress, resist arc tracking, and maintain dielectric strength in power distribution systems. Used in telecommunications, renewable energy, and industrial electrical installations, these potting compounds ensure safety, reliability, and long-term performance in high-voltage applications.",

    ],

    24: [
      "Nameplate bonder adhesives permanently attach metal, plastic, and printed labels to appliances, machinery, and vehicles. They provide weather resistance, chemical stability, and tamper-proof bonding for branding and identification. Pressure-sensitive and structural adhesives suit various substrates. Used across manufacturing industries, they maintain legibility and professional appearance throughout product lifecycles.",

    ],

    25: [
      "Fuel filter assembly adhesives bond filter media, seal end caps, and secure housings in automotive and industrial fuel systems. They resist gasoline, diesel, ethanol blends, and high pressures while maintaining structural integrity. These specialized adhesives prevent leakage, ensure filtration efficiency, and withstand temperature cycles in engines, preventing contamination and protecting fuel injection systems.",

    ],

    26: [
      "Automotive application adhesives serve structural bonding, hem flange sealing, NVH damping, and trim attachment throughout vehicle assembly. They reduce weight, improve crashworthiness, and enable multi-material joining of steel, aluminum, composites, and plastics. Used in body-in-white, interior, and underhood applications, they enhance safety, comfort, and fuel efficiency in modern vehicles.",

    ],
    27: [
      "Nameplate bonder adhesives permanently attach metal, plastic, and printed labels to appliances, machinery, and vehicles. They provide weather resistance, chemical stability, and tamper-proof bonding for branding and identification. Pressure-sensitive and structural adhesives suit various substrates. Used across manufacturing industries, they maintain legibility and professional appearance throughout product lifecycles.",

    ],
    28: [
      "Nameplate bonder adhesives permanently attach metal, plastic, and printed labels to appliances, machinery, and vehicles. They provide weather resistance, chemical stability, and tamper-proof bonding for branding and identification. Pressure-sensitive and structural adhesives suit various substrates. Used across manufacturing industries, they maintain legibility and professional appearance throughout product lifecycles.",

    ],
    29: [
      "Foundry sand core bonding adhesives secure mold components and bind sand particles in metal casting processes. They provide high-temperature resistance during molten metal pouring, accurate dimensional stability, and clean burnout. Used in automotive, aerospace, and industrial castings, these adhesives improve casting quality, reduce defects, and increase production efficiency in foundry operations.",

    ],
    30: [
      "Aerospace and space adhesives meet extreme requirements for vacuum stability, radiation resistance, and temperature cycling from -150°C to 300°C. They bond composites, metals, and honeycomb structures in aircraft, satellites, and spacecraft. Certified to aviation standards, these structural adhesives provide high strength-to-weight ratios, fuel resistance, and long-term reliability in mission-critical applications.",

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
