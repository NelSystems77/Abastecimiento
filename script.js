// 1. INICIALIZACIÓN DE LIBRERÍAS
const { jsPDF } = window.jspdf;

// 2. TUS DATOS JSON (Mantengo los productos que subiste)
const productsData = [
    { "codigo": "1-10-16-0010", "nombre": "CN PARACETAMOL 500 MG, TABLETA" },
    { "codigo": "1-10-09-0020", "nombre": "CN ACETAZOLAMIDA 250 MG. TABLETAS" },
    { "codigo": "1-10-11-0030", "nombre": "CN ACIDO ACETIL SALICILICO 100 MG. T" },
    { "codigo": "1-10-41-0043", "nombre": "CN MICOFENOLATO DE MOFETILO 250" },
    { "codigo": "1-10-04-0045", "nombre": "CN ABACAVIR 600 MG (COMO SULFATO) C" },
    { "codigo": "1-10-04-0046", "nombre": "CN ACICLOVIR 400 MG. TABLETAS O TAB" },
    { "codigo": "1-10-42-0070", "nombre": "CN ACIDO ASCORBICO 500 MG. O ACIDO" },
    { "codigo": "1-10-13-0080", "nombre": "CN ACIDO FOLICO 1 MG, TABLETAS RANU" },
    { "codigo": "1-10-50-0085", "nombre": "CN FOLINATO (COMO SAL CALCICA)15 M" },
    { "codigo": "1-10-46-0089", "nombre": "CN ACITRETINA 25 MG, CÁPSULA." },
    { "codigo": "1-10-28-0090", "nombre": "CN VALPROATO SEMISODICO EQUIVALE" },
    { "codigo": "1-10-32-0095", "nombre": "CN ACIDO URSODEOXICOLICO 250 MG, C" },
    { "codigo": "1-10-42-0100", "nombre": "CN ALFACALCIDOL 0.25 MCG CAPSULAS D" },
    { "codigo": "1-10-42-0110", "nombre": "CN ALFACALCIDOL 1 MCG. CAPSULAS DE" },
    { "codigo": "1-10-15-0130", "nombre": "CN ALOPURINOL 300 MG. TABLETAS." },
    { "codigo": "1-10-32-0140", "nombre": "CN ALUMINIO HIDROXIDO SIN MAGNESI" },
    { "codigo": "1-10-41-0150", "nombre": "CN METOTREXATO 2.5 MG BASE, TABLE" },
    { "codigo": "1-10-07-0160", "nombre": "CN AMIODARONA CLORHIDRATO 200 MG" },
    { "codigo": "1-10-29-0170", "nombre": "CN AMITRIPTILINA CLORHIDRATO 10 M" },
    { "codigo": "1-10-02-0185", "nombre": "CN AMOXICILINA BASE 500 MG, (COMO A" },
    { "codigo": "1-10-41-0190", "nombre": "CN ANASTROZOL 1 MG O LETROZOL 2.5 M" },
    { "codigo": "1-10-36-0200", "nombre": "TR ESTRADIOL VALERIANATO Y ESTRA" },
    { "codigo": "1-10-08-0210", "nombre": "CN ATENOLOL 50 MG. TABLETAS." },
    { "codigo": "1-10-41-0220", "nombre": "CN AZATIOPRINA 50 MG, TABLETA CON" },
    { "codigo": "1-10-22-0240", "nombre": "CN BETANECOL CLORURO 10 MG. TABL" },
    { "codigo": "1-10-26-0245", "nombre": "CN BIPERIDENO HIDROCLORURO 2 MG. T" },
    { "codigo": "1-10-38-0250", "nombre": "CN BROMOCRIPTINA BASE 2.5 MG.(COM" },
    { "codigo": "1-10-08-0267", "nombre": "CN ENALAPRIL MALEATO 20 MG. TABLET" },
    { "codigo": "1-10-28-0270", "nombre": "CN CARBAMAZEPINA 200 MG, TABLETAS." },
    { "codigo": "1-10-43-0280", "nombre": "CN CALCIO IONICO 3OO MG.(EQUIVALEN" },
    { "codigo": "1-10-02-0290", "nombre": "CN CEFALEXINA BASE 500 MG. (COMO M" },
    { "codigo": "1-10-02-0308", "nombre": "CN CIPROFLOXACINO BASE 500 MG (COM" },
    { "codigo": "1-10-02-0310", "nombre": "CN CLARITROMICINA 500 MG TABLETA R" },
    { "codigo": "1-10-29-0333", "nombre": "CN CLORHIDRATO DE CLOMIPRAMINA 25" },
    { "codigo": "1-10-28-0340", "nombre": "CN CLONAZEPAN 2 MG., TABLETAS" },
    { "codigo": "1-10-29-0345", "nombre": "CN CLOMIPRAMINA HIDROCLORURO 75 M" },
    { "codigo": "1-10-25-0370", "nombre": "CN CLORFENAMINA MALEATO 4 MG (SI" },
    { "codigo": "1-10-30-0390", "nombre": "CN CLORPROMAZINA HIDROCLORURO ( E" },
    { "codigo": "1-10-30-0392", "nombre": "CN CLOZAPINA 100 MG. TABLETAS." },
    { "codigo": "1-10-17-0410", "nombre": "CN CODEINA FOSFATO HEMIHIDRATADA" },
    { "codigo": "1-10-15-0420", "nombre": "CN COLCHICINA 0.5 O 0.6 MG. TABLETAS" },
    { "codigo": "1-10-02-0450", "nombre": "CN DAPSONA 100 MG., TABLETAS" },
    { "codigo": "1-10-34-0460", "nombre": "CN DEXAMETASONA 0.5 MG. TABLETAS." },
    { "codigo": "1-10-24-0470", "nombre": "CN DEXTROMETORFANO BROMOHIDRAT" },
    { "codigo": "1-10-31-0480", "nombre": "CN DIAZEPAM 5 MG. TABLETAS RANURAD" },
    { "codigo": "1-10-04-0495", "nombre": "CN DARUNAVIR 600 MG TABLETAS RECU" },
    { "codigo": "1-10-04-0500", "nombre": "CN DOLUTEGRAVIR 50 MG (COMO DOLU" },
    { "codigo": "1-10-04-0505", "nombre": "CN DOLUTEGRAVIR 50 MG (COMO DOLU" },
    { "codigo": "1-10-25-0525", "nombre": "CN DIFENHIDRAMINA CLORHIDRATO 50 M" },
    { "codigo": "1-10-28-0540", "nombre": "CN FENITOINA SODICA 100 MG. DE ACCI" },
    { "codigo": "1-10-07-0550", "nombre": "CN DIGOXINA 0,25 MG, TABLETA" },
    { "codigo": "1-10-25-0560", "nombre": "CN DIMENHIDRINATO 50 MG., TABLETAS" },
    { "codigo": "1-10-04-0580", "nombre": "CN EFAVIRENZ 600 MG, TABLETAS REC" },
    { "codigo": "1-10-04-0585", "nombre": "CN EFAVIRENZ 600 MG, EMTRICITABINA 2" },
    { "codigo": "1-10-04-0595", "nombre": "CN ELVITEGRAVIR 150 MG, COBICISTAT" },
    { "codigo": "1-10-07-0610", "nombre": "CN ENALAPRIL MALEATO 5 MG. TABLETA" },
    { "codigo": "1-10-27-0620", "nombre": "CN ERGOTAMINA TARTRATO 2 MG. O ER" },
    { "codigo": "1-10-09-0650", "nombre": "CN ESPIRONOLACTONA 100 MG. TABLET" },
    { "codigo": "1-10-36-0660", "nombre": "CN ESTROGENOS CONJUGADOS 0.625 M" },
    { "codigo": "1-10-14-0685", "nombre": "CN ALENDRONATO (COMO SAL MONOSOD" },
    { "codigo": "1-10-32-0695", "nombre": "CN FAMOTIDINA 40 MG. TABLETAS O TA" },
    { "codigo": "1-10-16-0700", "nombre": "CN CLORHIDRATO DE FENAZOPIRIDINA 1" },
    { "codigo": "1-10-28-0720", "nombre": "CN FENOBARBITAL 25 MG. TABLETAS RA" },
    { "codigo": "1-10-28-0730", "nombre": "CN FENOBARBITAL 100 MG. TABLETAS R" },
    { "codigo": "1-10-04-0760", "nombre": "CN FLUCONAZOL 200 MG. CAPSULAS O T" },
    { "codigo": "1-10-29-0765", "nombre": "CN FLUOXETINA (COMO CLORHIDRATO) 2" },
    { "codigo": "1-10-09-0790", "nombre": "CN FUROSEMIDA 40 MG., TABS." },
    { "codigo": "1-10-28-0791", "nombre": "CN GABAPENTINA 300 MG. CÁPSULAS." },
    { "codigo": "1-10-13-0795", "nombre": "CN GEMFIBROZILO 600 MG. TABLETA RE" },
    { "codigo": "1-10-39-0800", "nombre": "CN GLIBENCLAMIDA ( NO MICRONIZADA )" },
    { "codigo": "1-10-39-0805", "nombre": "CN GLICLAZIDA 80 MG- TABLETA." },
    { "codigo": "1-10-10-0810", "nombre": "CN NITROGLICERINA 0.5 A 0.6 MG. TABL" },
    { "codigo": "1-10-30-0830", "nombre": "CN HALOPERIDOL 5 MG., TABLETAS" },
    { "codigo": "1-10-08-0840", "nombre": "CN HIDRALAZINA CLORHIDRATO 50 MG. T" },
    { "codigo": "1-10-08-0850", "nombre": "CN HIDROCLOROTIAZIDA 25 MG. TABLE" },
    { "codigo": "1-10-34-0859", "nombre": "CN HIDROCORTISONA 5 MG. TABLETAS." },
    { "codigo": "1-10-34-0860", "nombre": "CN HIDROCORTISONA 20 MG., TABLETA" },
    { "codigo": "1-10-41-0865", "nombre": "CN HIDROXICARBAMIDA 500 MG." },
    { "codigo": "1-10-25-0875", "nombre": "CN HIDROXIZINA CLORHIDRATO25 MG. O" },
    { "codigo": "1-10-01-0880", "nombre": "CN HIDROXICLOROQUINA BASE 310 MG (" },
    { "codigo": "1-10-32-0890", "nombre": "CN ALUMINIO HIDRÓXIDO 200 MG Y MAG" },
    { "codigo": "1-10-39-0900", "nombre": "CN METFORMINA HIDROCLORURO 500 M" },
    { "codigo": "1-10-13-0910", "nombre": "CN HIERRO FUMARATO 200 MG., TABS." },
    { "codigo": "1-10-21-0920", "nombre": "CN BUTILBROMURO DE HIOSCINA 10" },
    { "codigo": "1-10-21-0925", "nombre": "CN OXIBUTININA HIDROCLORURO 5 MG," },
    { "codigo": "1-10-14-0930", "nombre": "CN IBUPROFENO 400 MG. TABLETAS REC" },
    { "codigo": "1-10-29-0940", "nombre": "CN IMIPRAMINA CLORHIDRATO 10 MG. T" },
    { "codigo": "1-10-29-0950", "nombre": "CN IMIPRAMINA CLORHIDRATO 25 MG. T" },
    { "codigo": "1-10-14-0960", "nombre": "CN INDOMETACINA 25 MG., CAPSULAS" },
    { "codigo": "1-10-10-1000", "nombre": "CN ISOSORBIDE DINITRATO 20 MG. TAB" },
    { "codigo": "1-10-42-1004", "nombre": "CN ISOTRETINOÍNA 10 MG . CÁPSULA" },
    { "codigo": "1-10-04-1005", "nombre": "CN ITRACONAZOL 100 MG. CAPSULAS." },
    { "codigo": "1-10-01-1008", "nombre": "CN IVERMECTINA 6 MG. TABLETAS." },
    { "codigo": "1-10-28-1014", "nombre": "CN LAMOTRIGINA 100 MG. TABLETA DIS" },
    { "codigo": "1-10-14-1016", "nombre": "CN LEFLUNOMIDA 20 MG TABLETA" },
    { "codigo": "1-10-28-1020", "nombre": "CN LAMOTRIGINA 25 MG. TABLETA DISP" },
    { "codigo": "1-10-08-1030", "nombre": "CN METILDOPA ( LEVO - ALFA ) 250 MG." },
    { "codigo": "1-10-08-1040", "nombre": "CN METILDOPA 500 MG, TABLETAS RECU" },
    { "codigo": "1-10-23-1043", "nombre": "CN MONTELUKAST 10 MG (COMO MONTE" },
    { "codigo": "1-10-23-1044", "nombre": "CN MONTELUKAST 5 MG, (COMO MONTE" },
    { "codigo": "1-10-04-1045", "nombre": "CN LAMIVUDINA 150 MG. TABLETAS REC" },
    { "codigo": "1-10-23-1046", "nombre": "CN MONTELUKAST 4 MG (COMO MONTEL" },
    { "codigo": "1-10-26-1050", "nombre": "CN LEVODOPA 100 MG. Y CARBIDOPA AN" },
    { "codigo": "1-10-26-1055", "nombre": "CN LEVODOPA 200 MG. Y CARBIDOPA A" },
    { "codigo": "1-10-30-1060", "nombre": "CN LEVOMEPROMAZINA BASE 25 MG (CO" },
    { "codigo": "1-10-40-1070", "nombre": "CN LEVOTIROXINA SODICA 0.025 MG., T" },
    { "codigo": "1-10-40-1080", "nombre": "CN LEVOTIROXINA SODICA 0.10 MG. TAB" },
    { "codigo": "1-10-30-1090", "nombre": "CN LITIO CARBONATO 300 MG. TABLETAS" },
    { "codigo": "1-10-33-1095", "nombre": "CN LOPERAMIDA CLORHIDRATO 2 MG. T" },
    { "codigo": "1-10-31-1100", "nombre": "CN LORAZEPAM 2 MG., TABLETAS" },
    { "codigo": "1-10-08-1103", "nombre": "CN IRBESARTAN 150 MG TABLETA RECUB" },
    { "codigo": "1-10-13-1105", "nombre": "CN LOVASTATINA 20 MG. TABLETAS." },
    { "codigo": "1-10-01-1110", "nombre": "CN ALBENDAZOL 200 MG. TABLETA O TA" },
    { "codigo": "1-10-36-1120", "nombre": "CN MEDROXIPROGESTERONA ACETATO 5" },
    { "codigo": "1-10-17-1160", "nombre": "CN METILFENIDATO HIDROCLORURO 10 M" },
    { "codigo": "1-10-32-1180", "nombre": "CN METOCLOPRAMIDA BASE 10 MG. (CO" },
    { "codigo": "1-10-32-1182", "nombre": "CN MESALAZINA 500 MG (TABLETA DE L" },
    { "codigo": "1-10-01-1192", "nombre": "CN METRONIDAZOL 500 MG. TABLETAS." },
    { "codigo": "1-10-22-1200", "nombre": "CN NEOSTIGMINA BROMURO 15 MG.TAB" },
    { "codigo": "1-10-10-1220", "nombre": "CN AMLODIPINO 5 MG.(COMO BESILATO D" },
    { "codigo": "1-10-05-1230", "nombre": "CN NITROFURANTOINA (MACROCRISTAL" },
    { "codigo": "1-10-36-1250", "nombre": "CJ ANTICONCEPTIVO ORAL EN COMBINA" },
    { "codigo": "1-10-36-1260", "nombre": "CJ ANTICONCEPTIVO ORAL EN COMBINA" },
    { "codigo": "1-10-32-1275", "nombre": "CN OMEPRAZOL 20 MG, CÁPSULA DE LI" },
    { "codigo": "1-10-32-1285", "nombre": "CN OMEPRAZOL 10 MG. CÁPSULA DE LI" },
    { "codigo": "1-10-32-1286", "nombre": "CN PANCREATINA O PANCREALIPASA (1" },
    { "codigo": "1-10-32-1290", "nombre": "CN PANCREALIPASA (4000 UNIDADES F." },
    { "codigo": "1-10-30-1320", "nombre": "CN PERFENAZINA 4 MG. TABLETA RECUB" },
    { "codigo": "1-10-42-1350", "nombre": "CN VITAMINA B-6 ( PIRIDOXINA CLORHI" },
    { "codigo": "1-10-01-1355", "nombre": "CN PIRIMETAMINA 25 MG. TABLETAS." },
    { "codigo": "1-10-34-1410", "nombre": "CN PREDNISOLONA 1 MG., TABLETA" },
    { "codigo": "1-10-34-1420", "nombre": "CN PREDNISOLONA 5 MG, TABLETA" },
    { "codigo": "1-10-34-1430", "nombre": "CN PREDNISOLONA 25 MG., TABLETA" },
    { "codigo": "1-10-28-1450", "nombre": "CN PRIMIDONA 250 MG., TABLETAS" },
    { "codigo": "1-10-40-1500", "nombre": "CN PROPILTIOURACILO 50 MG., TABLETA" },
    { "codigo": "1-10-07-1510", "nombre": "CN PROPRANOLOL CLORHIDRATO 10 MG" },
    { "codigo": "1-10-08-1520", "nombre": "CN PROPRANOLOL CLORHIDRATO 40 MG" },
    { "codigo": "1-10-30-1568", "nombre": "CN RISPERIDONA 1 MILIGRAMO. TABLET" },
    { "codigo": "1-10-04-1570", "nombre": "CN RITONAVIR 100 MG. TABLETAS RECU" },
    { "codigo": "1-10-23-1580", "nombre": "CN SALBUTAMOL ( COMO SULFATO ) 4 M" },
    { "codigo": "1-10-50-1585", "nombre": "CN ALFUZOSINA HIDROCLORURO 10 MG T" },
    { "codigo": "1-10-02-1610", "nombre": "CN SULFASALACINA 500 MG.TABLETAS C" },
    { "codigo": "1-10-14-1612", "nombre": "CN SULINDACO 200 MG.TABLETAS." },
    { "codigo": "1-10-25-1614", "nombre": "CN LORATADINA FEXOFENADINA HIDROCLORURO DE 1" },
    { "codigo": "1-10-41-1615", "nombre": "CN TAMOXIFENO BASE 20 MG. (COMO C" },
    { "codigo": "1-10-41-1617", "nombre": "CN TACROLIMUS 0.5 MG (COMO" },
    { "codigo": "1-10-41-1618", "nombre": "CN TACROLIMUS 1 MG (COMO TACROLIM" },
    { "codigo": "1-10-41-1619", "nombre": "CN TALIDOMIDA 50 MG. CÁPSULAS Ó T" },
    { "codigo": "1-10-23-1620", "nombre": "CN TEOFILINA ANHIDRA 150 MG. TABLET" },
    { "codigo": "1-10-23-1630", "nombre": "CN TEOFILINA ANHIDRA A.P. 250 MG A 3" },
    { "codigo": "1-10-02-1640", "nombre": "CN DOXICICLINA BASE 100 MG. (COMO H" },
    { "codigo": "1-10-14-1645", "nombre": "CN TENOXICAN 20 MG.TABLETAS RECUB" },
    { "codigo": "1-10-42-1650", "nombre": "CN VITAMINA B-1 ( TIAMINA CLORHIDRAT" },
    { "codigo": "1-10-28-1702", "nombre": "CN TOPIRAMATO 100 MG, TABLETA RECU" },
    { "codigo": "1-10-50-1705", "nombre": "CN TIZANIDINA HIDROCLORURO 4 MG . T" },
    { "codigo": "1-10-30-1710", "nombre": "CN TRIFLUOPERAZINA ( COMO DICLORH" },
    { "codigo": "1-10-02-1730", "nombre": "CN TRIMETOPRIMA CON SULFAMETOXAZO" },
    { "codigo": "1-10-29-1750", "nombre": "CN VENLAFAXINA HIDROCLORURO EQUI" },
    { "codigo": "1-10-07-1754", "nombre": "CN VERAPAMILO CLORHIDRATO 80 MG. T" },
    { "codigo": "1-10-28-1755", "nombre": "CN VIGABATRINA 500 MG TABLETA REC" },
    { "codigo": "1-10-11-1758", "nombre": "CN WARFARINA SODICA 1 MG. TABLETA" },
    { "codigo": "1-10-11-1760", "nombre": "CN WARFARINA SODICA 5 MG. TABLETA" },
    { "codigo": "1-10-07-1765", "nombre": "CN CARVEDILOL 6.25 MG, TABLETAS RE" },
    { "codigo": "1-10-11-1775", "nombre": "CN CLOPIDOGREL (COMO BISULFATO) 7" },
    { "codigo": "1-10-07-1780", "nombre": "CN CARVEDILOL 12.5 MG TABLETA O TA" },
    { "codigo": "1-10-04-1805", "nombre": "CN TENOFOVIR DISOPROXIL FUMARATO 3" },
    { "codigo": "1-10-16-2400", "nombre": "CN ACETAMINOFEN 300 MG., SUPOSITO" },
    { "codigo": "1-10-47-2410", "nombre": "TU POLICRESULENO 18 MG-GRAMO. GEL" },
    { "codigo": "1-10-47-2420", "nombre": "CN POLICRESULENO 90 MG. OVULOS DE 3" },
    { "codigo": "1-10-46-2425", "nombre": "TU ÁCIDO SALICÍLICO AL 5% (50 MG/G)" },
    { "codigo": "1-10-49-2440", "nombre": "CN PREPARACION ANTIHEMORROIDAL. F" },
    { "codigo": "1-10-49-2450", "nombre": "TU PREPARACION ANTIHEMORROIDAL, U" },
    { "codigo": "1-10-46-2460", "nombre": "TU BETAMETASONA BASE AL 0.1% (1 MG" },
    { "codigo": "1-10-46-2470", "nombre": "TU BETAMETASONA ( COMO 17 VALERAT" },
    { "codigo": "1-10-33-2480", "nombre": "CN BISACODILO 10 MG. SUPOSITORIOS D" },
    { "codigo": "1-10-46-2500", "nombre": "TU CREMA DE ROSAS. TUBO DE 40 G A 6" },
    { "codigo": "1-10-25-2520", "nombre": "CN DIMENHIDRINATO 25 MG., SUPOSIT" },
    { "codigo": "1-10-25-2530", "nombre": "CN DIMENHIDRINATO 100 MG., SUPOSIT" },
    { "codigo": "1-10-47-2550", "nombre": "TU ESTROGENOS CONJUGADOS F.E.U. 0" },
    { "codigo": "1-10-46-2555", "nombre": "TU FLUOROURACILO 5% (50 MG/G) . CR" },
    { "codigo": "1-10-33-2560", "nombre": "CN GLICEROL (GLICERINA) DE 1 G A 1" },
    { "codigo": "1-10-33-2570", "nombre": "CN GLICEROL (GLICERINA) DE 2 G A 2" },
    { "codigo": "1-10-46-2610", "nombre": "TU HIDROCORTISONA BASE AL .025% (" },
    { "codigo": "1-10-46-2620", "nombre": "TU HIDROCORTISONA BASE AL 1% (10" },
    { "codigo": "1-10-14-2640", "nombre": "CN INDOMETACINA 100 MG., SUPOSITO" },
    { "codigo": "1-10-19-2650", "nombre": "TU LIDOCAÍNA HIDROCLORURO 2% (20 M" },
    { "codigo": "1-10-50-2655", "nombre": "TU JALEA O GEL LUBRICANTE. TUBO CO" },
    { "codigo": "1-10-46-2660", "nombre": "TU FUSIDATO SODICO 2% (20 MG/G). U" },
    { "codigo": "1-10-46-2670", "nombre": "TU OXIDO DE ZINC FÓRMULA. CREMA T" },
    { "codigo": "1-10-46-2675", "nombre": "TU PEROXIDO DE BENZOILO AL 5%. (50 M" },
    { "codigo": "1-10-46-2690", "nombre": "TU SULFADIAZINA DE PLATA AL 1% (10 M" },
    { "codigo": "1-10-45-2692", "nombre": "TU TETRACICLINA CLORHIDRATO AL 1% (" },
    { "codigo": "1-10-46-2695", "nombre": "TU TIOCONAZOL AL 1% (10 MG/GRAMO)" },
    { "codigo": "1-10-47-2697", "nombre": "CN TIOCONAZOL 100 MG. TABLETAS VAG" },
    { "codigo": "1-10-43-3090", "nombre": "AM AGUA ESTERIL PARA INYECCION. AM" },
    { "codigo": "1-10-21-3200", "nombre": "AM ATROPINA SULFATO 0.5 MG/ML. SOL" },
    { "codigo": "1-10-26-3220", "nombre": "AM BIPERIDENO LACTATO 5 MG/ML" },
    { "codigo": "1-10-43-3250", "nombre": "AM GLUCONATO DE CALCIO AL 10 % (1" },
    { "codigo": "1-10-02-3278", "nombre": "FC CEFTRIAXONA BASE 1 G (COMO CEFT" },
    { "codigo": "1-10-32-3290", "nombre": "AM CIMETIDINA BASE 150 MG / ML (COM" },
    { "codigo": "1-10-25-3340", "nombre": "AM CLORFENAMINA MALEATO 1% (10 MG" },
    { "codigo": "1-10-34-3420", "nombre": "AM DEXAMETASONA FOSFATO 4 MG/ ML" },
    { "codigo": "1-10-31-3630", "nombre": "AM DIAZEPAM 10 MG, SOLUCIÓN INYECT" },
    { "codigo": "1-10-14-3650", "nombre": "AM DICLOFENACO SODICO 75 MG. SOLU" },
    { "codigo": "1-10-28-3680", "nombre": "AM FENITOINA SODICA 50 MG / ML. SO" },
    { "codigo": "1-10-25-3690", "nombre": "FA DIMENHIDRINATO SOL., AL 5% FRAS" },
    { "codigo": "1-10-06-3720", "nombre": "AM DOPAMINA CLORHIDRATO 200 MG. (" },
    { "codigo": "1-10-06-3750", "nombre": "AM EPINEFRINA BASE 1 MG / ML. (1:1.0" },
    { "codigo": "1-10-13-3755", "nombre": "UD EPOETINA ALFA (DE ORIGEN ADN RE" },
    { "codigo": "1-10-13-3757", "nombre": "UD EPOETINA ALFA (DE ORIGEN ADN RE" },
    { "codigo": "1-10-36-3780", "nombre": "AM ESTRADIOL VALERATO 10 MG / ML. I" },
    { "codigo": "1-10-12-3880", "nombre": "AM FITOMENADIONA 10 MG/ML. INYECT" },
    { "codigo": "1-10-30-3890", "nombre": "FA FLUFENAZINA DECANOATO 25 MG / M" },
    { "codigo": "1-10-09-3940", "nombre": "AM FUROSEMIDA 20 MG (10 MG / ML) IN" },
    { "codigo": "1-10-30-4000", "nombre": "FA OLANZAPINA 10 MG POLVO LIOFIL" },
    { "codigo": "1-10-30-4060", "nombre": "AM HALOPERIDOL 5 MG/ ML. SOLUCION I" },
    { "codigo": "1-10-08-4090", "nombre": "AM HIDRALAZINA CLORHIDRATO 20 MG. I" },
    { "codigo": "1-10-11-4095", "nombre": "UD ENOXAPARINA SÓDICA 80 MG (8.000" },
    { "codigo": "1-10-34-4100", "nombre": "FA HIDROCORTISONA BASE 100 MG (CO" },
    { "codigo": "1-10-13-4110", "nombre": "FC HIERRO DEXTRANO: SOLUCION COL" },
    { "codigo": "1-10-21-4120", "nombre": "AM BUTILBROMURO DE HIOSCINA 20 MG" },
    { "codigo": "1-10-41-4130", "nombre": "FA INTERFERON BETA 1-A DE ORIGEN AD" },
    { "codigo": "1-10-39-4145", "nombre": "FA INSULINA HUMANA ISÓFANA BIOSINTÉTICA" },
    { "codigo": "1-10-39-4150", "nombre": "FA INSULINA HUMANA CRISTALINA BIOSINTÉTICA" },
    { "codigo": "1-10-45-4169", "nombre": "FC LATANOPROST AL 0,005% (50 UG / ML)" },
    { "codigo": "1-10-19-4190", "nombre": "FC LIDOCAINA CLORHIDRATO AL 2% (2 MG/ML)" },
    { "codigo": "1-10-43-4220", "nombre": "AM MAGNESIO SULFATO AL 20 % (200 MG/ML)" },
    { "codigo": "1-10-36-4250", "nombre": "FA MEDROXIPROGESTERONA ACETATO 150 MG/ML" },
    { "codigo": "1-10-34-4290", "nombre": "FA METILPREDNISOLONA BASE 500 MG (INYECCIÓN)" },
    { "codigo": "1-10-32-4300", "nombre": "AM METOCLOPRAMIDA CLORHIDRATO 10 MG/ML" },
    { "codigo": "1-10-17-4320", "nombre": "AM MORFINA SULFATO PENTAHIDRATO 10 MG/ML" },
    { "codigo": "1-10-48-4330", "nombre": "FA NALOXONA CLORHIDRATO 0.4 MG/ML" },
    { "codigo": "1-10-02-4400", "nombre": "FA ENCILPENICILINA 1.200.000 UNIDADES" },
    { "codigo": "1-10-02-4420", "nombre": "FA BENCILPENICILINA SÓDICA O POTÁSICA" },
    { "codigo": "1-10-43-4510", "nombre": "AM BICARBONATO DE SODIO AL 8.4%" },
    { "codigo": "1-10-43-4530", "nombre": "UD SODIO CLORURO 0.9%. SOLUCIÓN INYECTABLE" },
    { "codigo": "1-10-43-4560", "nombre": "UD SODIO CLORURO 0.9%. SOLUCIÓN INYECTABLE" },
    { "codigo": "1-10-35-4660", "nombre": "AM TESTOSTERONA ENANTATO 250 MG, SOLUCIÓN" },
    { "codigo": "1-10-42-4670", "nombre": "FC VITAMINA B-1 (TIAMINA CLORHIDRATO) 100 MG/ML" }
];

// 3. VARIABLES DE ESTADO
let selectedProducts = [];

// 4. ELEMENTOS DEL DOM (Definidos al inicio para evitar ReferenceError)
const searchInput = document.getElementById('searchInput');
const productResults = document.getElementById('productResults');
const selectedTableBody = document.getElementById('selectedTableBody');
const noSelectedMessage = document.getElementById('noSelectedMessage');
const generatePDFBtn = document.getElementById('generatePDF');
const btnAddNew = document.getElementById('btnAddNew');

// 5. FUNCIONES DE LÓGICA
function updateTableState() {
    if (selectedProducts.length > 0) {
        noSelectedMessage.style.display = 'none';
        if (generatePDFBtn) generatePDFBtn.disabled = false;
    } else {
        noSelectedMessage.style.display = 'block';
        if (generatePDFBtn) generatePDFBtn.disabled = true;
    }
}

function updateQuantity(codigo, field, value) {
    const product = selectedProducts.find(p => p.codigo === codigo);
    if (product) {
        product[field] = value;
    }
}

function removeProduct(codigo) {
    selectedProducts = selectedProducts.filter(p => p.codigo !== codigo);
    const rowToRemove = document.querySelector(`tr[data-codigo="${codigo}"]`);
    if (rowToRemove) rowToRemove.remove();
    updateTableState();
}

function renderSelectedRow(product) {
    const tr = document.createElement('tr');
    tr.setAttribute('data-codigo', product.codigo);
    tr.innerHTML = `
        <td>${product.nombre}</td>
        <td class="editable"><input type="number" class="input-cell" min="0" value="${product.solicitada || ''}" oninput="updateQuantity('${product.codigo}', 'solicitada', this.value)"></td>
        <td class="editable"><input type="number" class="input-cell" min="0" value="${product.recibida || ''}" oninput="updateQuantity('${product.codigo}', 'recibida', this.value)"></td>
        <td style="text-align:center;"><button class="btn-remove" onclick="removeProduct('${product.codigo}')">Eliminar</button></td>
    `;
    selectedTableBody.appendChild(tr);
}

function addProduct(product) {
    if (selectedProducts.some(p => p.codigo === product.codigo)) {
        alert('Este producto ya está seleccionado.');
        return;
    }
    const newProduct = { ...product, solicitada: '', recibida: '' };
    selectedProducts.push(newProduct);
    renderSelectedRow(newProduct);
    updateTableState();
    productResults.style.display = 'none';
    searchInput.value = '';
}

// 6. EVENTOS
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        if (searchTerm.length < 2) {
            productResults.style.display = 'none';
            return;
        }
        const filtered = productsData.filter(p => p.nombre.toLowerCase().includes(searchTerm));
        productResults.innerHTML = '';
        if (filtered.length === 0) {
            productResults.innerHTML = '<div class="result-item" style="cursor:default">No se encontraron productos.</div>';
        } else {
            filtered.forEach(p => {
                const div = document.createElement('div');
                div.className = 'result-item';
                div.textContent = p.nombre;
                div.onclick = () => addProduct(p);
                productResults.appendChild(div);
            });
        }
        productResults.style.display = 'block';
    });
}

if (btnAddNew) {
    btnAddNew.addEventListener('click', () => {
        const sugerencia = searchInput.value.trim();
        const nuevoNombre = prompt("Ingrese el nombre del nuevo producto:", sugerencia);
        if (nuevoNombre && nuevoNombre.trim() !== "") {
            const nuevoProducto = {
                codigo: `MANUAL-${Date.now()}`, 
                nombre: nuevoNombre.trim().toUpperCase()
            };
            productsData.push(nuevoProducto);
            addProduct(nuevoProducto);
        }
    });
}

if (generatePDFBtn) {
    generatePDFBtn.addEventListener('click', () => {
        const doc = new jsPDF('p', 'mm', 'a4');
        const now = new Date();
        
        doc.setFontSize(8);
        doc.setTextColor(100);
        doc.text(`Fecha: ${now.toLocaleDateString()} - Hora: ${now.toLocaleTimeString()}`, 10, 8);
        doc.text('Generado por Selector de Productos', 200, 8, { align: 'right' });

        const headers = [['Producto', 'Cantidad Solicitada', 'Cantidad Recibida']];
        const data = selectedProducts.map(p => [
            p.nombre,
            p.solicitada || ' ', 
            p.recibida || ' '    
        ]);

        doc.autoTable({
            head: headers,
            body: data,
            startY: 12,
            margin: { top: 12, bottom: 10, left: 10, right: 10 },
            styles: { fontSize: 10, cellPadding: 2, overflow: 'linebreak' },
            headStyles: { fillColor: [66, 66, 66], textColor: 255 },
            columnStyles: {
                0: { cellWidth: 'auto' },
                1: { cellWidth: 40, halign: 'center' },
                2: { cellWidth: 40, halign: 'center' }
            },
            theme: 'grid' // Cambiado a 'grid' para que se vean bien las líneas para escribir
        });

        doc.save(`Pedido-${now.toISOString().slice(0,10)}.pdf`);
    });
}

// Cerrar resultados al clickear fuera
document.addEventListener('click', (e) => {
    if (productResults && !e.target.closest('.search-container')) {
        productResults.style.display = 'none';
    }
});

// Inicialización
updateTableState();
