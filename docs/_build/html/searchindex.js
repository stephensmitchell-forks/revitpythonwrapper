Search.setIndex({docnames:["base","builtins","collections","collector","dynamo","element","exceptions","forms","geometry","index","known_issues","parameters","revit","revitpythonshell","selection","tests","transaction","utils"],envversion:52,filenames:["base.rst","builtins.rst","collections.rst","collector.rst","dynamo.rst","element.rst","exceptions.rst","forms.rst","geometry.rst","index.rst","known_issues.rst","parameters.rst","revit.rst","revitpythonshell.rst","selection.rst","tests.rst","transaction.rst","utils.rst"],objects:{"rpw.__revit":{Revit:[12,3,1,""]},"rpw.__revit.Revit":{active_view:[12,0,1,""],app:[12,0,1,""],doc:[12,0,1,""],docs:[12,0,1,""],host:[12,0,1,""],open:[12,4,1,""],process:[12,0,1,""],process_id:[12,0,1,""],process_name:[12,0,1,""],uidoc:[12,0,1,""],username:[12,0,1,""],version:[12,0,1,""]},"rpw.base":{BaseObjectWrapper:[0,3,1,""]},"rpw.base.BaseObjectWrapper":{__init__:[0,4,1,""],unwrap:[0,4,1,""]},"rpw.db":{Area:[5,3,1,""],AreaScheme:[5,3,1,""],Category:[5,3,1,""],Collector:[3,3,1,""],Element:[5,3,1,""],ElementCollection:[2,3,1,""],ElementSet:[2,3,1,""],Family:[5,3,1,""],Instance:[5,3,1,""],Parameter:[11,3,1,""],ParameterFilter:[3,3,1,""],ParameterSet:[11,3,1,""],Room:[5,3,1,""],Symbol:[5,3,1,""],Transaction:[16,3,1,""],WallCategory:[5,3,1,""],WallFamily:[5,3,1,""],WallInstance:[5,3,1,""],WallSymbol:[5,3,1,""],XYZ:[8,3,1,""],XyzCollection:[2,3,1,""],builtins:[1,2,0,"-"],collection:[2,2,0,"-"],collector:[3,2,0,"-"],element:[5,2,0,"-"],parameter:[11,2,0,"-"],transaction:[16,2,0,"-"]},"rpw.db.Area":{area:[5,0,1,""],name:[5,0,1,""],scheme:[5,0,1,""]},"rpw.db.AreaScheme":{areas:[5,0,1,""],name:[5,0,1,""]},"rpw.db.Category":{_builtin_enum:[5,0,1,""],families:[5,0,1,""],instances:[5,0,1,""],name:[5,0,1,""],symbols:[5,0,1,""]},"rpw.db.Collector":{__init__:[3,4,1,""],_collect:[3,4,1,""],element_ids:[3,0,1,""],elements:[3,0,1,""],first:[3,0,1,""],select:[3,4,1,""],wrapped_elements:[3,0,1,""]},"rpw.db.Element":{__init__:[5,4,1,""],__new__:[5,5,1,""],collect:[5,6,1,""],from_id:[5,5,1,""],from_int:[5,5,1,""]},"rpw.db.ElementCollection":{append:[2,4,1,""],clear:[2,4,1,""],element_ids:[2,0,1,""],elements:[2,0,1,""]},"rpw.db.ElementSet":{add:[2,4,1,""],as_element_id_list:[2,4,1,""],as_element_list:[2,4,1,""],clear:[2,4,1,""],element_ids:[2,0,1,""],elements:[2,0,1,""],pop:[2,4,1,""],select:[2,4,1,""],wrapped_elements:[2,0,1,""]},"rpw.db.Family":{category:[5,0,1,""],instances:[5,0,1,""],name:[5,0,1,""],siblings:[5,0,1,""],symbols:[5,0,1,""]},"rpw.db.Instance":{category:[5,0,1,""],family:[5,0,1,""],siblings:[5,0,1,""],symbol:[5,0,1,""]},"rpw.db.Parameter":{__init__:[11,4,1,""],builtin:[11,0,1,""],builtin_id:[11,0,1,""],name:[11,0,1,""],type:[11,0,1,""],value:[11,0,1,""]},"rpw.db.ParameterFilter":{__init__:[3,4,1,""],from_element_and_parameter:[3,5,1,""]},"rpw.db.ParameterSet":{__getitem__:[11,4,1,""],__init__:[11,4,1,""],__setitem__:[11,4,1,""],all:[11,0,1,""]},"rpw.db.Room":{is_bounded:[5,0,1,""],is_placed:[5,0,1,""],name:[5,0,1,""],number:[5,0,1,""]},"rpw.db.Symbol":{category:[5,0,1,""],family:[5,0,1,""],instances:[5,0,1,""],name:[5,0,1,""],siblings:[5,0,1,""]},"rpw.db.Transaction":{ensure:[16,5,1,""]},"rpw.db.XYZ":{__init__:[8,4,1,""],as_dict:[8,0,1,""],as_tuple:[8,0,1,""],at_z:[8,4,1,""],x:[8,0,1,""],y:[8,0,1,""],z:[8,0,1,""]},"rpw.db.XyzCollection":{average:[2,0,1,""],max:[2,0,1,""],min:[2,0,1,""],sorted_by:[2,4,1,""]},"rpw.db.builtins":{BiCategory:[1,3,1,""],BiParameter:[1,3,1,""]},"rpw.db.builtins.BiCategory":{from_category_id:[1,4,1,""],get:[1,4,1,""],get_id:[1,4,1,""]},"rpw.db.builtins.BiParameter":{get:[1,4,1,""],get_id:[1,4,1,""]},"rpw.db.collection.XyzCollection.point_collection":{average:[2,0,1,""],max:[2,0,1,""],min:[2,0,1,""]},"rpw.db.collector.Collector.collector":{elements:[3,0,1,""],first:[3,0,1,""],wrapped_elements:[3,0,1,""]},"rpw.db.element.Element":{parameters:[5,0,1,""],unwrap:[5,4,1,""]},"rpw.db.element.Element.parameters":{builtins:[5,0,1,""]},"rpw.db.parameter.Parameter":{_revit_object:[11,0,1,""]},"rpw.db.parameter.ParameterSet":{_revit_object:[11,0,1,""]},"rpw.exceptions":{RpwCoerceError:[6,7,1,""],RpwException:[6,7,1,""],RpwParameterNotFound:[6,7,1,""],RpwTypeError:[6,7,1,""],RpwWrongStorageType:[6,7,1,""]},"rpw.ui":{Selection:[14,3,1,""],forms:[7,2,0,"-"],selection:[14,2,0,"-"]},"rpw.ui.Selection":{__bool__:[14,4,1,""],__init__:[14,4,1,""],_pick:[14,4,1,""],add:[14,4,1,""],clear:[14,4,1,""],pick_box:[14,4,1,""],pick_by_rectangle:[14,4,1,""],pick_edge:[14,4,1,""],pick_element:[14,4,1,""],pick_face:[14,4,1,""],pick_linked_element:[14,4,1,""],pick_pt:[14,4,1,""],pick_pt_on_element:[14,4,1,""],update:[14,4,1,""]},"rpw.ui.forms":{Alert:[7,3,1,""],Button:[7,3,1,""],CheckBox:[7,3,1,""],ComboBox:[7,3,1,""],Console:[7,3,1,""],FlexForm:[7,3,1,""],Label:[7,3,1,""],SelectFromList:[7,8,1,""],Separator:[7,3,1,""],TextBox:[7,3,1,""],TextInput:[7,8,1,""],console:[7,2,0,"-"],select_file:[7,8,1,""],select_folder:[7,8,1,""]},"rpw.ui.forms.Alert":{__init__:[7,4,1,""]},"rpw.utils":{coerce:[17,2,0,"-"]},"rpw.utils.coerce":{dictioary_to_string:[17,8,1,""],to_category:[17,8,1,""],to_class:[17,8,1,""],to_element_ids:[17,8,1,""],to_elements:[17,8,1,""],to_iterable:[17,8,1,""],to_pascal_case:[17,8,1,""]},XYZ:{_revit_object:[8,0,1,""]},rpw:{DB:[12,1,1,""],UI:[12,1,1,""],__revit:[12,2,0,"-"],base:[0,2,0,"-"],exceptions:[6,2,0,"-"]}},objnames:{"0":["py","attribute","Python attribute"],"1":["py","data","Python data"],"2":["py","module","Python module"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","staticmethod","Python static method"],"6":["py","classmethod","Python class method"],"7":["py","exception","Python exception"],"8":["py","function","Python function"]},objtypes:{"0":"py:attribute","1":"py:data","2":"py:module","3":"py:class","4":"py:method","5":"py:staticmethod","6":"py:classmethod","7":"py:exception","8":"py:function"},terms:{"0ecd":14,"221c":14,"24x36":[],"36x48":[],"41a5099b2f9f":14,"48x64":[],"7clr":[],"boolean":10,"case":[0,3,5,10,15,17],"class":[0,1,2,3,5,6,7,8,9,11,12,14,15,16,17],"default":[3,5,7,15],"enum":[1,7],"float":[3,7,8,11,15],"function":[0,1,3,5,7,15,16],"import":[0,1,2,3,4,5,6,7,8,9,11,12,14,15,16,17],"int":[5,7,11,15,17],"new":[5,8,12],"return":[0,1,2,3,5,7,8,11,12,14,15,16,17],"static":[3,5,16],"super":[0,1,2,3,5,6,8,11,14,16],"true":[0,2,3,5,7,10,14,15,16,17],"try":[0,1,2,3,5,7,9,11,12,15,16],"var":7,AND:15,Adding:7,BUT:15,FOR:15,For:[1,3,5,7],Has:15,Ids:[2,3,15,17],NOT:15,Not:[5,11],RPS:12,THE:15,Tes:15,That:9,The:[3,4,5,7,9,10,11,12,13,15],There:[5,9],These:[1,5,11,15],USE:15,Use:[2,3,5,16],Used:3,Useful:7,Uses:[3,5,7,15],WITH:15,Will:7,__bool__:[2,3,14],__class__:[0,5,7,15],__contains__:2,__dict__:[0,7],__dir__:0,__enter__:16,__eq__:11,__exit__:16,__file__:15,__ge__:11,__getattr__:[0,1],__getitem__:[2,3,11],__gt__:[11,12],__init__:[0,1,2,3,5,6,7,8,11,12,14,16],__iter__:[2,3,17],__le__:11,__len__:[2,3,11],__lt__:[11,12],__main__:7,__name__:[0,5,7,15],__ne__:11,__new__:5,__repr__:[0,2,3,5,7,8,11,12,14,15,16],__revit:12,__revit__:[9,12],__setattr__:0,__setitem__:11,__str__:12,_builtin_enum:5,_builtinparameterset:11,_collect:3,_collector:3,_collector_param:5,_element:2,_element_dict:2,_host:12,_index:7,_paramet:11,_pick:14,_revit_object:[0,3,5,8,11,14,16],_revit_object_categori:5,_revit_object_class:[0,1,3,5,8,11,14,16],abc:7,abcmeta:7,abl:[4,7],about:7,abov:[3,5,15],ac_opt:7,acccess:5,accept:17,acceptsreturn:7,access:[0,3,5,9,12],acess:0,achiev:10,across:[9,15],action:15,active_view:[12,15],activeuidocu:[9,12,14],activeview:[12,15],actual:5,add:[2,3,4,5,7,9,11,12,13,14,15,16],added:[5,12],adding:14,addit:[7,9],addition:3,addrefer:[7,9,12],addreferencebypartialnam:12,addreferencetofileandpath:7,adjust:5,advanc:3,advantag:[2,11],after:[7,16],against:3,alia:[],all:[0,3,5,7,9,11,12,15],all_id:15,all_model_family_nam:5,all_model_instance_com:[11,15],all_model_type_nam:5,all_symbol:15,allow:[0,3,5,7,11],along:12,alreadi:[0,17],also:[9,12,14,15],altern:[3,5],alwai:[4,10,12,17],and_filt:3,ani:[0,2,3,4,5,7,8,11,15,16,17],anyrevitpropertyormethod:0,api:[2,3,10],apiobject:0,app:[9,12],append:[2,3,4,5,7,12,15],append_histori:7,appendtext:7,appli:[3,16],applic:[9,12,15],appropri:7,architectur:[3,5,7,15],area:[5,15],area_scheme_id:5,areafilt:3,areaschem:[5,15],areatagfilt:3,arg:[0,1,2,3,5,7,8,11,14,16,17],argument:[0,3,10],aris:15,around:7,as_dict:8,as_element_id_list:[2,14],as_element_list:2,as_tupl:8,asdoubl:11,aselementid:11,asinteg:11,assembl:9,assert:[15,16],assertequ:15,assertfals:15,assertgreat:15,asserti:15,assertin:15,assertisinst:15,assertrais:15,asserttru:15,assimil:16,associ:15,asstr:11,assum:[8,10],at_z:8,attempt:5,attr:[0,1],attr_pascal_cas:0,attribut:[0,2,3,5,7,8,9,11],attributeerror:[0,1,2,7],author:15,auto:7,autocomplet:7,autodesk:[3,8,9,11,12,15],automat:[0,7,11,16],avail:7,averag:2,avoid:5,awai:12,axi:2,axist:2,back:[0,7,16],base:[1,2,3,5,6,8,9,11,12,14,15,16,17],basefilt:3,basenam:7,baseobject:[0,1,2,3,12,14],baseobjectwrapp:[0,1,3,5,8,11,14,16,17],basic:[5,15],batch:9,becaus:0,been:[3,5,9,15],befor:[7,16],begin:[3,15],behavi:3,being:[0,12],below:[4,5,9,15],besid:12,best:5,better:5,bicategori:1,bicenum:[1,3,5,17],bip2:15,bip:[5,15],bip_enum:15,biparamet:1,bipenum:[1,3,5,11,15],bla:15,blaa:15,blank_str:11,blend:7,blog:3,bool:[2,3,5,7,11,14,16],bool_valu:3,bound:[5,15],boundingboxcontainspointfilt:3,boundingboxintersectsfilt:3,boundingboxisinsidefilt:3,box:[7,14],bug:[5,10],build:[3,7,12],builinparamet:11,built:[1,3,5,11,15],builtin:[3,5,9,11,15,17],builtin_enum:11,builtin_id:11,builtin_nam:11,builtin_paramet:11,builtincategori:[1,3,5,15,17],builtincollectortest:15,builtinparamet:[1,3,11,15],buitin:5,buitinparamet:1,button:7,button_text:7,call:[0,5,7,9,14],caller:7,came:7,can:[0,3,4,5,7,9,11,12],cancel:15,cannot:5,caret:7,caret_index:7,caretindex:7,case_sensit:[3,10],cast:[1,6,9,11,17],cateagory_refer:17,categori:[1,3,9,15,17],category_id:1,category_nam:1,category_refer:[3,17],categoryfilt:3,categoryid:17,caus:0,center:14,centerscreen:7,chain:3,chang:9,charg:15,check:[2,7,11,12],checkbox1:7,checkbox:7,checkbox_text:7,checkout:4,child:0,children:7,chose:5,claim:15,class_:3,class_nam:[0,5],class_refer:[3,17],classfilt:3,classmethod:[3,5,15],clean:7,clear:[2,7,14,15],click:[7,15],clone:13,close:[7,15],clr:[7,9,12],cls:[3,5,15],cmd:7,co_filenam:7,co_firstlineno:7,co_nam:7,code:[0,1,4,9,12],coerc:[0,2,3,6,14,15,17],coerce_param_refer:3,coercetest:15,col:[10,15],collect:[3,5,7,9,14,15],collector:[4,5,15],collector_doc:3,collector_help:15,collectortest:15,column:7,columndefinit:7,com:[3,7,9,14,15],combin:3,combobox1:7,combobox:7,comment:[9,11,15,16],commit:[9,15,16],common:[9,12],commonli:5,compar:15,comparison:[10,11,12],compat:[1,5,7,15],compens:5,complet:16,complex:9,compon:[7,17],component_valu:7,condit:[3,15],condition_nam:3,condition_valu:3,conflict:7,connect:15,consist:[0,5,9],consit:5,consol:17,consola:7,constraint:15,constructor:[3,5,11],contain:[2,3,15],content:7,context:[7,11,15,16],continu:3,contract:15,control:[],control_typ:7,conveni:[4,9],convent:9,convert:[0,3,9,11,17],coordin:8,copi:15,copyright:15,correct:0,correspond:5,could:[1,5,6,10,11,12],count:[2,3,7,9,11,14],crash:0,creat:[0,1,3,5,7,9,11,12,14,15],createbeginswithrul:[3,10],createcontainsrul:3,createendswithrul:3,createequalsrul:[3,9],creategreaterorequalrul:3,creategreaterrul:3,createlessorequalrul:3,createlessrul:3,createrul:3,critic:9,cross:14,current:14,currentdbdocu:[9,12],currentfram:7,currentuiappl:[9,12],cursor:7,cursor_line_index:7,curvedrivenfilt:3,curveelementfilt:3,custom:[3,6,7],d001:14,d552f44b:14,damag:15,data:[0,2,3,5,8,9,11,14,15],datum_text:15,deal:15,debug:[3,7,15],decor:16,def:[0,1,2,3,5,6,7,8,11,12,14,15,16,17],defaultdict:7,defin:[0,3,5],defined_wrapper_class:5,definit:11,delet:[9,12,15],delete_all_wal:15,depend:3,deploi:7,deploybutton:7,deploywindow:7,deprac:5,descript:[7,15],design:3,desk:[3,5,9,11,15],desk_typ:15,dialogresult:7,dict:[3,7,8],dictioary_to_str:17,dictionari:[7,8,11,17],dictionary_to_str:17,differ:[5,9,12,15],dir:[0,1,3,5,7],direct:[12,14],directli:9,directori:[7,13],dirnam:15,discov:3,discoveri:3,disimilarti:5,displai:7,distribut:[4,15],dll:[7,9],doc:[1,2,3,5,9,10,12,14,15,16,17],document:[0,1,2,3,5,9,12,14,15,16,17],documentmanag:[9,12],doe:[0,5],doesnt:2,dosometh:16,dotnet:[1,2,3,7,12,14,15,17],doubl:11,down:7,download:4,draw:7,dropdown:7,due:[5,7],dyn:4,dynamo:[0,7,9,12,15,16],dynamotransact:16,e_ref:17,each:[3,12],easi:9,easier:3,easili:4,easilli:0,edg:14,effect:10,effort:9,ehsan:14,eid:[2,9,15],either:10,elemendid:[3,11],element1:3,element2:3,element:[0,2,3,6,7,10,11,14,15,16,17],element_class_nam:5,element_id:[2,3,5,14,15,17],element_or_id:2,element_refer:[2,17],element_set:2,elementcategoryfilt:3,elementclassfilt:3,elementdesignoptionfilt:3,elementfilt:3,elementid:[1,2,3,5,9,11,12,14,15,17],elementintersectsfilt:3,elementiscurvedrivenfilt:3,elementiselementtypefilt:3,elementlevelfilt:3,elementmulticategoryfilt:3,elementmulticlassfilt:3,elementownerviewfilt:3,elementparameterfilt:[3,9,10],elementphasestatusfilt:3,elements_or_id:[2,14],elementset:14,elementstructuraltypefilt:3,elementtest:15,elementworksetfilt:3,elemnet:7,elev:8,elif:[3,8,11,17],els:[0,2,3,5,7,8,9,11,14,16,17],empti:[3,14],enclos:14,end:[3,12,15],endpoint:14,endswith:3,enforc:3,enforce_typ:[0,1,5],ensur:[0,7,15,16,17],ensureintransact:[9,16],enter:7,entered_lin:7,enumer:[1,3,7,11],environ:7,equal:[3,5,11,15],equival:5,errmsg:[7,12,16],error:[1,6,7,16],etc:[5,7],eval:7,evalu:[3,7],even:17,event:15,everyth:[4,15],exact:[5,7],exampl:[0,3,4,9,15],except:[0,1,2,3,5,7,8,9,11,12,14,15,16,17],exception_valu:16,exclud:3,excluded_el:3,exclusionfilt:3,exec:[7,12],execut:15,exist:[0,5],exit:[7,15],exit_on_clos:[7,15],exp:1,expect:[0,6,9,10],express:[7,15],extend:5,extens:7,extensiblestorag:3,extensiblestoragefilt:3,extra:4,f_back:7,f_code:7,f_global:7,f_local:7,face:14,facilit:3,factori:[3,5,15],fail:[5,7,15,16],failur:15,fals:[0,1,2,3,5,7,9,14,15,16],famili:[3,9,15],family_id:[3,5],family_load:15,family_nam:17,family_refer:3,familycategori:5,familyinst:[3,5,9,15],familyinstac:9,familyinstancefilt:3,familynam:17,familystructuralmaterialtypefilt:3,familysymbol:[5,9,15],familysymbolfilt:3,fcol:15,featur:9,feed:3,few:[8,9,11],file:[4,12,15],filedialog:7,filenam:7,filepath:7,filter:[3,7,15],filter_class:3,filter_class_nam:3,filter_rul:[3,9,10],filter_valu:3,filter_value_rul:3,filterclass:3,filteredcollectortest:15,filteredel:3,filteredelementcollector:[3,9,10,15],filterinverserul:3,filterrul:3,find:[4,5,7,15],find_dynamo_uiapp:12,first:[0,2,3,5,9,11,15],first_symbol:15,firstel:14,fit:15,flag:[7,15],flat:11,flex:7,flexibl:[3,9],float_precis:3,focu:7,folder:[],folderbrowserdialog:7,folderpath:7,follow:[9,11,15],fontfamili:7,fontsiz:7,forc:14,forceclosetransact:16,form:[12,15],form_ok:15,format:[0,1,3,5,6,7,11,12,15,16,17],formselectfromlisttest:15,formtextinputtest:15,found:[1,3,5,6,11,12],frame:7,framework:7,free:15,fregion:15,from:[0,1,2,3,4,5,6,7,8,9,11,12,14,15,16,17],from_category_id:[1,5,17],from_el:3,from_element_and_paramet:[3,15],from_id:[5,15],from_int:[5,15],fromhandl:12,fullnam:12,func:[3,5],funciton:[15,16],functool:16,furnish:15,furnitur:[1,9,15],fuzzi:17,fuzzy_get:[1,17],gener:5,get:[0,1,3,5,7,11,12,17],get_all_histori:7,get_available_filt:3,get_id:[1,3,5,15],get_last_entered_lin:7,get_last_lin:7,get_lin:7,get_paramet:11,get_sort:3,get_valu:7,getattr:[0,1,2,3,5,7,15,17],getcategori:1,getcurrentprocess:12,getel:[2,5,15,17],getelemend:9,getelementcount:[3,15],getelementid:[9,14],getfamilysymbolid:5,getlinetext:7,getmemb:5,getmro:5,getnam:15,getsimilartyp:5,getstatu:15,gettempdir:7,getter:[0,11],gettypeid:5,getvalu:5,getwindow:7,github:[7,9,15],give:[0,9],global:[7,12,15],goo:5,got:[6,9],grant:15,greater:[3,9,11,15],greater_equ:3,grid:7,group:[3,16],gtalarico:[9,12,15],gui:15,h_align:7,hand:7,handi:9,handl:[1,2,7,9,11,12],handler:[9,12,14],has:[0,5,9,10,16],hasattr:[0,7,17],hasend:15,hasstart:15,have:[3,4,15],head:7,height:[5,7,11,15],help:[1,2,4,8,9],helper:[5,7],here:[1,3],herebi:15,hidden:15,histori:[7,16],history_down:7,history_fil:7,history_index:7,history_it:7,history_up:7,hit:9,holder:15,home:7,horizontalalign:7,host:[7,12,14,16],how:[3,7,9,12,15],howev:12,htm:14,html:3,http:[3,5,7,9,14],id_:15,id_int:5,ids:[15,17],ignor:7,ignorecas:1,ilist:2,imag:4,implement:9,impli:15,importantli:5,includ:[4,10,15],increas:9,index:[2,3,7,9],indexerror:[2,3,5,7],infinetli:7,info:[3,7],inform:7,inherit:[0,5,7,11],inhert:5,init:7,initi:[7,9,12,14],inject:7,input:[3,7,9,15,17],insensit:10,inspect:[5,7],instal:[4,9],instanc:[2,3,8,9,11,12,15,16],instancetest:15,instanti:[0,3,5,12],instati:7,instead:[2,3,5,11,15],integ:[2,5,11,15],integervalu:[1,15],intend:15,interact:9,interfac:5,intern:[0,1,3,11],interpret:9,intersect:14,intiial:14,invalidelementid:[3,11,17],ipi:[5,12],ironpython:[5,7,9,10,12],is_bound:5,is_curve_driven:3,is_not_typ:[3,5,15],is_plac:5,is_typ:[3,5,9,15],is_view_independ:[3,15],ischeck:7,isclass:5,iselectfilt:14,iselectionfilt:14,isinst:[0,2,3,5,7,8,11,15,17],isnottypefilt:3,isol:15,isreadonli:11,issu:7,istypefilt:3,item:[7,11],item_or_iter:17,itemssourc:7,iter:[2,3,5,7,17],iteritem:[0,3,7,17],itertool:7,its:[1,3,9,12],join:[0,7,15,17],june:3,just:4,keep:[0,14],kei:[2,3,7,17],keydown:7,keyerror:[0,6],keypresspreview:7,keyup:7,keyword:[3,5],kind:[5,15],kwarg:[0,5,7,16],label:7,label_text:7,lambda:[2,3],last:[3,7],last_lin:7,last_line_index:7,last_new_lin:7,latest:[],launch:7,layout:7,leav:3,left:7,len:[2,3,7,8,11,14,15],length:[3,11],less:[3,9,11,15],less_equ:3,less_than:3,letter:15,level:[3,5,9,15],level_id:3,level_refer:3,levelfilt:3,levelnam:3,liabil:15,liabl:15,lib:12,librari:[4,7,9,12,15],light:8,like:8,limit:[3,15],line:7,linecount:7,link:14,linkedel:14,linq:3,list:[0,2,3,5,7,8,9,11,14,15,17],littl:9,loadcompon:7,local:7,locat:[4,5,14],location_lin:11,log:7,logger:[0,3,5,6,7,11,12,14,15,16],loggerwrapp:15,logic:[3,12,14],logicalandfilt:3,logicalorfilt:3,looksup:15,lookupparamet:[3,11,15],loop:7,loose_category_nam:1,lower:[0,1,7],main:[3,5],maingrid:7,maintain:0,mainwindowhandl:12,major:16,make:[0,5,9,14,16,17],make_wal:15,malform:3,manag:[2,4,9,11,16],mani:15,manual:4,map:5,margin:7,markup:7,match:[5,11,14],math:5,max:[0,2],mechan:3,member:[1,3,5,11],memori:3,menuitem:7,merchant:15,merg:[15,16],messag:[7,14],method:[0,1,2,3,5,7,8,9,14],method_nam:3,microsoft:7,midpoint:14,might:5,min:2,miss:0,mission:9,misus:0,mit:9,mixin:7,mock:12,mockobject:12,model:5,modifi:15,modul:[4,5,7,9,12],more:[3,5,7,9],most:[0,5],move:[14,16],mqdzwg:5,msdn:7,msg:[5,6,14],much:9,multipl:[3,7,14,15],multiselect:7,must:[0,3,7,11],name:[0,1,3,5,7,9,11,12,15,16,17],nameerror:12,namespac:[7,9,12],navig:5,nearest:14,need:[0,4,7,9,12],net40:[],net:[7,9],new_collector:3,new_level:15,new_obj:5,new_object:5,newlevel:15,newlin:7,next:7,node:4,noinspect:12,non:17,none:[0,2,3,5,6,7,11,12,14,15,16],noninfring:15,nores:7,normal:[7,9],not_:3,not_begin:[3,15],not_contain:3,not_end:3,not_equ:[3,15],not_great:3,not_greater_equ:3,not_less:[3,15],not_less_equ:3,not_level:3,note:[0,2,3,5,11,14],notic:15,notimpl:[3,12,14,16],notlevelfilt:3,number:[5,7],obj_typ:14,object:[0,2,3,5,8,9,12,14,16,17],objectsnaptyp:14,objecttyp:14,obtain:15,of_categori:[3,5,9,15],of_class:[3,5,9,15],ofcategori:[3,15],ofclass:[3,9,15],offic:5,offset:7,on_click:7,onc:[4,15],one:[3,5,8,17],onkeydownhandl:7,onkeyuphandl:7,onli:[0,3,4,5,11,15,17],open:[7,12],openandactivatedocu:15,openfiledialog:7,openxmlformat:7,opt:7,option:[2,3,7,9,14],or_filt:3,order:3,ordereddict:2,org:7,origin:[0,1,9],os_categori:15,ost_:1,ost_area:5,ost_filledregion:15,ost_furnitur:[1,15],ost_level:15,ost_room:[1,3,5,15],ost_stackedwal:15,ost_view:9,ost_wal:[3,5,15,17],other:[0,1,3,4,5,7,9,11,12,14,15],otherwis:[14,15],out:[7,15],output:7,over:[7,9],overid:3,overload:14,overrid:[0,3,5,7],overriden:[0,5],overview:9,own:[0,7,11],owner_view:3,packag:[4,9],page:9,pair:[9,17],panel_dir:15,param:[5,11,15],param_filt:5,param_id:[3,9,10],param_id_com:15,param_id_height:15,param_id_level_nam:15,param_id_loc:15,param_nam:[3,6,11,15],param_rul:3,param_valu:11,paramet:[0,1,2,3,5,6,7,8,9,10,14,15,16,17],parameter_filt:[3,5,15],parameter_id:3,parameter_nam:1,parameter_refer:3,parameter_typ:11,parameterd_does_not_exist:15,parameterfilt:[3,5,15],parameterfilterrulefactori:[3,9,10],parameterfiltertest:15,parametermap:11,parameterset:5,parametertyp:11,paramfilt:3,paramter_filt:9,parent:15,pars:7,particular:15,pascal:17,pass:[0,5,7,8,15,16,17],path:[4,7,9,12,13,15],pattern:9,per:3,perform:3,perhap:5,permiss:15,permit:15,perpendicular:14,persist:[9,12],person:15,pick:[7,14],pick_box:14,pick_by_rectangl:14,pick_edg:14,pick_el:14,pick_fac:14,pick_linked_el:14,pick_pt:14,pick_pt_on_el:14,pick_styl:14,pickbox:14,pickboxstyl:14,pickelementsbyrectangl:14,pickobject:14,pickpoint:14,pid:12,pin:0,place:[5,15],plan:0,platform:[9,12,15],pleas:[],plug:4,point:[2,8,14],point_collect:2,pointcollect:2,pointonel:14,pop:[2,3],portion:15,possibl:7,post:9,practic:4,pre:7,precis:3,prefer:3,present:7,presentationframework:7,press:[],pretti:9,prev_comp:7,previewkeydown:7,previou:7,previous:7,primari:0,primarili:[0,11],primarydesignoptionmemberfilt:3,print:[5,7],prioriti:3,priority_group:3,process:[3,12],process_id:12,process_nam:12,process_valu:3,processnam:12,program:[7,12],programm:9,project:9,proper:[0,3,14],properti:[0,2,3,5,7,8,11,12],provid:[0,2,5,7,9,11,14,15],pts:2,publish:15,purpos:15,pyrevit:[7,9,12],python:[4,6,7,11,12,13,15,16],python_typ:11,pyunresolvedrefer:12,quadrant:14,queri:3,question:9,quick:[3,7],quickfilt:3,rais:[0,1,2,3,5,8,11,12,14,16,17],ran:7,rang:7,read:[0,7,11],readthedoc:15,reason:5,rectangl:14,recurs:[0,3,7],reduc:[3,9],ref:14,refer:[0,1,2,5,9,11,12,14,17],referenc:14,regular:1,relat:[2,5],remain:17,remov:[2,9],rentabl:5,repetit:9,repl:7,replac:[1,7,12],report:6,repositori:13,repr:[0,7],repres:[5,8],represent:0,reproduc:10,request:[7,9],requir:3,reset:15,reset_caret:7,resizemod:7,resourc:7,respons:0,restor:7,restore_directori:7,restoredirectori:7,restrict:15,result:[3,5,10],retriev:[5,11],return_valu:16,reus:9,revers:3,revit:[0,1,2,3,4,5,6,7,8,11,13,14,15,16,17],revit_object:[0,5],revit_object_nam:0,revit_object_name_chunk:0,revitapi:[9,10,12],revitapidoc:14,revitapiui:[9,12],revitpythonshel:[7,9,10,12],revitpythonwrapp:[4,7,9,13,15],revitservic:[9,12],revitvers:12,revitwallel:5,rfind:7,right:[12,15],roll:16,rollback:[9,16],rolledback:15,room:[5,9,15],room_nam:5,room_numb:5,roomfilt:3,roominst:5,roomtagfilt:3,roomtest:15,root:12,root_dir:15,row:7,rowdefinit:7,rpw:[0,1,2,3,4,5,6,7,8,11,12,14,15,16,17],rpw_baseobjectwrapp:0,rpw_element:15,rpw_famili:5,rpw_getfilepath:4,rpw_getstart:4,rpw_instanc:5,rpw_path:4,rpw_room:5,rpw_symbol:5,rpwcoerceerror:[1,3,6,8,15],rpwcontrolmixin:7,rpwexcept:[0,3,5,6,11,16],rpwparameternotfound:[5,6,11,15],rpwtypeerror:[0,3,5,6,11,14,17],rpwwrongstoragetyp:[5,6,11,15],rule:[3,9,10],rule_factory_nam:3,run:16,rvt:[7,15],same:[3,5,9,10,11,17],sampl:[4,15],san:9,save:4,schema:7,scheme:5,scope:[3,15],screen:12,script:[7,9],script_dir:15,search:[1,3,13],second_symbol:15,see:[4,7,14],seem:14,select:[2,3,11,15],select_fil:7,select_fold:7,selectableinviewfilt:3,selected_el:9,selected_item:9,selecteditem:7,selectedpath:7,selectfromlist:[9,15],selection2:15,selection_id:9,selectionfilt:14,selectiontest:15,self:[0,1,2,3,4,5,6,7,8,11,12,14,15,16],sell:15,sender:7,sens:14,sensit:[3,10,15],separ:7,set:[0,2,3,5,7,9,11,12,14,15,17],set_attr:7,set_some_paramet:16,setattr:7,setelementid:14,setter:[0,5,7,8,11,12],setup:[7,15],setupclass:15,setupmodul:15,sever:[7,9],shall:15,shell:9,ship:4,shorcut:11,shortcut:[7,9],should:[3,4,7,9,15],shouldnt:3,show:[0,7,9,14,15],showdialog:7,shown:5,sibl:[5,15],similar:[1,2,3,16],simpl:7,simplifi:16,sinc:2,singl:[2,12,14,17],sizetocont:7,skip:12,slow:3,slowfilt:3,snake:[0,17],snake_str:17,snap:14,snapstodevicepixel:7,softwar:15,some:[1,5,7,9,11],some_built_in_nam:11,some_level:3,some_point:8,some_str:9,somearea:5,someel:[2,5,14],someelementid:[5,9,10,12,14],somefamilyinst:[5,9],somefunct:15,somelinkeddoc:3,someobject:0,somerevitel:9,someroom:5,somesymbol:[3,5],someth:[7,11,16],sometyp:3,someview:3,somewallinst:5,somewallsymbol:5,sort:[2,3,7],sorted_bi:2,sorted_point:2,spacefilt:3,spacetagfilt:3,spatial_el:5,spatialel:15,special:9,specifi:[5,7],speed:9,sphinx:12,sphinx_compat:12,split:[0,7,17],squash:16,stack:[7,15],stack_cal:7,stack_cod:7,stack_filenam:7,stack_fram:7,stack_glob:7,stack_info:7,stack_level:7,stack_lineno:7,stack_loc:7,stackedwal:15,standard:[7,9,12],start:[9,15,16],startswith:7,state:14,staticmethod:[3,5,7,15,16],statu:16,storag:[6,11],storage_typ:[6,11],storage_type_nam:11,storagetyp:11,store:[0,2,12],str:[1,2,3,5,7,11,12,14,15,16,17],stretch:7,string:[3,7,9,10,11,15,17],stringread:7,structur:3,structuralinstanceusagefilt:3,structuralmaterialtypefilt:3,structuralwallusagefilt:3,stuff:16,style:[7,14],subject:15,sublicens:15,substanti:15,sug:7,suggest:7,sum:2,superquickfilt:3,superslowfilt:3,support:5,sure:[0,4],symbol:[3,9,15],symbol_famili:5,symbol_family_name_param:5,symbol_id:3,symbol_inst:5,symbol_name_param:5,symbol_refer:3,symbols_id:5,syntaxerror:7,sys:[4,7,9,12,15],system:[7,12],systemexit:15,tab:7,take:11,talarico:15,tangent:14,target_typ:6,targettyp:7,task:[9,16],taskdialog:[12,15],tbox:7,teardown:15,teardownclass:15,teardownmodul:15,tempdir:7,tempfil:7,test:[1,2,3,7,9,10],test_built_in_parameter_exception_rais:15,test_cancel:15,test_categori:15,test_close_exit:15,test_collector_cast:15,test_collector_chained_cal:15,test_collector_el:15,test_collector_elements_view_el:15,test_collector_elements_view_element_anoth:15,test_collector_elements_view_id:15,test_collector_first:15,test_collector_is_el:15,test_collector_is_element_fals:15,test_collector_is_element_typ:15,test_collector_is_element_type_fals:15,test_collector_is_view_depend:15,test_collector_len:15,test_collector_scope_el:15,test_collector_scope_element_id:15,test_collector_symbol_filt:15,test_corce_element_ref_id:15,test_corce_element_ref_int:15,test_corce_into_id:15,test_corce_to_element_divers:15,test_db:15,test_dir:15,test_doc:15,test_element_collector_area:15,test_element_collector_areaschem:15,test_element_collector_room:15,test_element_collector_wal:15,test_element_collector_wallsymbol:15,test_element_factory_class:15,test_element_from_id:15,test_element_from_int:15,test_element_get_builtin_parameter_by_strin:15,test_element_get_builtin_parameter_cast:15,test_element_get_paramet:15,test_element_get_parameter_nam:15,test_element_get_parameter_typ:15,test_element_id:15,test_element_repr:15,test_element_set_get_builtin_parameter_by_strin:15,test_from_parameter_nam:15,test_get_dict_valu:15,test_get_valu:15,test_instance_categori:15,test_instance_famili:15,test_instance_symbol:15,test_instance_wrap:15,test_logg:15,test_param_comments_begin:15,test_param_comments_equ:15,test_param_comments_equal_cas:15,test_param_comments_not_begin:15,test_param_comments_not_equ:15,test_param_filter_float_equ:15,test_param_filter_float_great:15,test_param_filter_float_less_no:15,test_param_filter_float_less_y:15,test_param_filter_float_multi_filt:15,test_param_filter_float_not_equ:15,test_param_filter_int_equ:15,test_param_filter_int_less:15,test_parameter_does_not_exist:15,test_selection_add:15,test_selection_boolean:15,test_selection_boolean_fals:15,test_selection_by_index:15,test_selection_clear:15,test_selection_contain:15,test_selection_el:15,test_selection_element_id:15,test_selection_length:15,test_selection_upd:15,test_selection_updates_does_not_los:15,test_to_category_stacked_wal:15,test_to_category_wal:15,test_to_class_view:15,test_to_class_wal:15,test_to_iter:15,test_to_iterable_el:15,test_to_iterable_element_id:15,test_transaction_commit_status_rollback:15,test_transaction_commit_status_success:15,test_transaction_decor:15,test_transaction_get_nam:15,test_transaction_group:15,test_transaction_has_end:15,test_transaction_inst:15,test_transaction_start:15,test_ui:15,test_uidoc:15,test_util:15,test_wall_factori:15,test_wall_instance_categori:15,test_wall_instance_famili:15,test_wall_instance_symbol:15,test_wall_instance_wrap:15,testcas:15,tests_collect_room:15,tests_element_set_get_parameter_coerce_int:15,tests_element_set_get_parameter_coerce_str:15,tests_element_set_get_parameter_element_id:15,tests_element_set_get_parameter_float:15,tests_element_set_get_parameter_str:15,tests_param_class:15,tests_param_id_coerc:15,tests_param_name_contain:15,tests_param_name_end:15,tests_wrong_storage_typ:15,text:[7,15],textbox1:7,textbox:7,textinput:15,textwrap:7,than:11,thebuildingcod:3,thei:5,them:[5,9],thi:[0,3,5,7,9,10,11,12,15,17],thick:7,through:[0,4,5,9],throughout:0,time:[],titl:[7,9,15,17],to_categori:[3,15,17],to_class:[3,15,17],to_el:[2,9,14,15,17],to_element_id:[2,3,9,14,15,17],to_iter:[14,15,17],to_pascal_cas:[0,17],to_str:[0,8],todo:[0,1,2,7,11,14,15,16],toelement:[9,15],toelementid:3,toobject:1,top:[7,15],top_offset:7,topmost:7,tort:15,tostr:[0,11],traceback:16,track:7,tracker:3,transacationgroup:16,transact:[11,12,15],transaction_group:16,transactiongroup:[15,16],transactionmanag:[9,12,16],transactionstatu:[15,16],transactionstest:15,transactiontaskdon:[9,16],treat:11,tree:5,tupl:[0,8],twice:15,twitter:9,type:[0,1,2,3,5,6,7,8,9,11,12,14,15,17],type_expect:6,type_nam:3,type_receiv:6,typeerror:6,typepad:3,typic:[3,4,9],tysp:[],uiapp:[9,12],uiapplic:[12,15],uidoc:[9,12,14,15],uidocu:3,unchang:17,unconnect:[11,15],unecessari:3,unfortun:5,uniqu:2,unique_family_id:5,unittest:15,unknown:5,unless:0,unpack:3,unwrap:[0,3,5,15],updat:[5,7,12,14,15],usag:[3,7,11],use:[0,5,7,9,11,12,15],used:[1,3,4,5,7,9,11,12,15],uselayoutround:7,user:[3,7,9],usernam:12,uses:[3,5,14],using:[0,2,3,5,7,9,10,11],util:[0,1,2,3,5,6,7,11,12,14,15,16],v_align:7,v_space:7,valid:[3,15],valu:[0,2,3,5,6,7,8,9,10,11,15,16,17],valueerror:6,variabl:[0,7,9,12],verbos:7,verifi:15,version:[9,12,15],versionbuild:12,versionnam:12,versionnumb:12,verticalalign:7,verticalscrollbarvis:7,view:[3,9,12,15],view_depend:15,view_hidden:15,view_id:3,view_refer:[3,12],viewindependentfilt:3,viewownerfilt:3,viewsheet:3,viewspecif:15,viewtyp:3,wai:[5,9],wall:[3,9,11,15,16,17],wall_categori:15,wall_collector:15,wall_famili:15,wall_id:15,wall_inst:5,wall_key_ref_param:15,wall_kind:5,wall_location_lin:[1,5,9,11],wall_symbol:[5,15],wall_typ:5,wall_type_id:5,wall_user_height_param:[11,15],wallcategori:[5,15],wallfamili:[5,15],wallinst:[5,15],wallkind:[5,15],walls_categori:15,walls_el:15,walls_element_typ:15,wallsymbol:[5,15],walltest:15,walltyp:[5,9,15],warn:[0,3,5,12],warranti:15,well:[5,7,13,15],were:1,what:12,when:[0,5,7,12,16],where:[0,3,7,15],whereelementiselementtyp:3,whereelementisnotelementtyp:3,whereelementisviewindepend:3,wherefilt:3,wherepass:[3,9,10],whether:[5,15],which:[0,7],whom:15,width:7,widthandheight:7,window:[7,9,12],windowsbas:7,windowst:7,windowstartuploc:7,winfx:7,within:[4,16],without:[9,15],witout:5,wood:7,word:12,work:[0,5,7,9,13,15,16],workplanegrid:14,would:[0,4,5,10],wpf:[7,9],wpf_param:7,wpfapplication1:7,wrap:[0,2,3,5,7,8,11,14,15,16],wrapped_el:[2,3,5,9,11],wrapped_f:16,wrapped_param:15,wrapped_view:15,wrapped_wal:15,wrappedwal:0,wrapper:[1,3,4,6,7,8,11,12,13,14,15,16],wrapper_class:5,write:[2,7,9,15],write_lin:7,write_text:7,wrong:6,www:[9,14],x86:[7,12],x_avg:2,x_max:2,x_min:2,x_valu:2,x_y_z:2,xaml:7,xmln:7,xxx:[],xyz:[0,2,8],xyz_or_tupl:8,y_avg:2,y_max:2,y_min:2,y_valu:2,year:12,yield:[2,3],you:[0,4,7,9,11,12],your:[0,3,4,7,9,12],z_avg:2,z_max:2,z_min:2,z_valu:2},titles:["Base Wrapper","BuiltIns","Collections","Collector","Dynamo","Element Wrappers","Exceptions","Forms","Geometry","Revit Python Wrapper","Known Issues","Parameters","Revit","RevitPythonShell","Selection","Tests","Transaction","Utilities"],titleterms:{For:9,Using:9,alert:7,api:9,base:0,basic:9,benefit:9,builtin:1,categori:5,collect:2,collector:[3,9],compat:9,compon:9,consol:7,contribut:9,control:7,dialog:7,dynamo:4,element:[5,9],elementcollect:2,elementset:2,except:6,famili:5,file:7,flexform:7,folder:7,form:[7,9],geometri:8,implement:[0,1,2,3,5,6,7,8,11,12,14,16,17],instanc:5,issu:10,known:10,licens:9,method:12,paramet:11,parameterfilt:9,parameterset:11,python:9,quickform:7,revit:[9,12],revitpythonshel:13,rpw:9,select:[7,9,14],selectfromlist:7,spatial:5,suit:15,symbol:5,taskdialog:7,test:15,textinput:7,transact:[9,16],typic:12,util:[9,17],wall:5,wrapper:[0,5,9],xyzcollect:2}})