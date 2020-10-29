drop table student;
drop table STAFF;
drop table PROGRAMME;
drop table COURSE;
drop table STUDENT_COURSE;



create table student
(STUDENT_NO CHAR(8) PRIMARY KEY NOT NULL,
 SURNAME NVARCHAR2(15) NULL,
 GIVEN NVARCHAR2(15) NULL,
 DOB DATE NULL,
 SEX CHAR(1) NULL,
 ADDR1 NVARCHAR2(15) NULL,
 ADDR2 NVARCHAR2(15) NULL,
 ADDR3 NVARCHAR2(10) NULL,
 POSTCODE NUMERIC(4) NULL,
 PHONE NVARCHAR2(10) NULL,
 PROGRAMME_CODE VARCHAR2(6) NULL,
 PROGRAMME_LOAD VARCHAR2(1) NULL) ;

insert into student values('9103191X','Kath','TONY',TO_DATE('1973/01/01 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'M','42 ALLISON ST','SURREY HILLS','VICTORIA',3127,'7842728','100102','p');
insert into student values('2103191X','Johny','JANE',TO_DATE('1973/01/01 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'M','42 ALLISON ST','SURREY HILLS','VICTORIA',3127,'7842728','100203','p');
insert into student values('3103191X','Sam','RAE',TO_DATE('1973/01/01 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'M','42 ALLISON ST','SURREY HILLS','VICTORIA',3127,'7842728','165000','F');
insert into student values('4103191X','Noah','DAVID',TO_DATE('1973/01/01 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'M','42 ALLISON ST','SURREY HILLS','VICTORIA',3127,'7842728','165001','F');
insert into student values('5103191X','Rose','CLARE',TO_DATE('1973/01/01 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'M','42 ALLISON ST','SURREY HILLS','VICTORIA',3127,'7842728','165002','F');




 
 create table STAFF
(ST_StaffID NUMERIC PRIMARY KEY NOT NULL,
 ST_Surname NVARCHAR2(30) NULL,
 ST_Given NVARCHAR2(30) NULL,
 ST_DOB DATE NULL,
 ST_Sex CHAR(1) NULL,
 ST_Joined DATE NULL,
 ST_Resigned DATE NULL,
 ST_Address NVARCHAR2(40) NULL,
 ST_Suburb NVARCHAR2(40) NULL,
 ST_Postcode NVARCHAR2(40) NULL,
 ST_Phone NVARCHAR2(15) NULL,
 ST_SupervisorID NUMERIC(15) NULL,
 ST_Commission NUMERIC(15) NULL,
 ST_RatePerHour NUMERIC(10) NULL) ;
insert into STAFF values ( 1, 'VELLA', 'SARATH AJITH L', TO_DATE(' 1943/9/10 21:02:44', 'yyyy/mm/dd hh24:mi:ss'), 'M', TO_DATE('1997/4/16	1:02:44', 'yyyy/mm/dd hh24:mi:ss'), TO_DATE(' 1943/9/10 1:02:44', 'yyyy/mm/dd hh24:mi:ss'), '76 SAUNDERS ST', 'STH MELBOURNE', '3153', '8579410', 0,  0, 22.21 );
insert into STAFF values ( 2, 'MARZELLA', 'PATRICK MICHAEL ',  TO_DATE(' 1956/3/12 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'M', TO_DATE('1997/9/3	1:02:44', 'yyyy/mm/dd hh24:mi:ss'), TO_DATE(' 1998/3/29 1:02:44', 'yyyy/mm/dd hh24:mi:ss'), '126 THE PARADE', 'CARLTON', '3146', '93374764', 1,  0,  17.87 );
insert into STAFF values ( 3, 'HILTON', 'HARRY RODNEY E',  TO_DATE(' 1969/3/18 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'F', TO_DATE('1996/10/18	1:02:44', 'yyyy/mm/dd hh24:mi:ss'), null, '24/49 WALSH ST', 'BIRREGURRA VIC', '3205', '97231600', 0,  0,  18.83 );
insert into STAFF values ( 4, ' JAMIESON', 'TERRENCE IAN',  TO_DATE(' 1942/11/2 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'F', TO_DATE('1997/7/12	1:02:44', 'yyyy/mm/dd hh24:mi:ss'), TO_DATE(' 1997/9/17 1:02:44', 'yyyy/mm/dd hh24:mi:ss'), '6 LIBRA CRT', 'ENDEAVOUR HILLS', '3764', '94392347', 1,  0,  10.23 );
insert into STAFF values ( 5, ' SANDERS', 'RICHARD ANTHONY',  TO_DATE(' 1961/3/3 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'M', TO_DATE('1998/1/21	1:02:44', 'yyyy/mm/dd hh24:mi:ss'), TO_DATE(' 1998/6/5 1:02:44', 'yyyy/mm/dd hh24:mi:ss'), '513 TOORONGA RD', 'COBURG', '3146', '3001193', 1,  0,  16.02 );
insert into STAFF values ( 6, ' SUMMERS', 'Ted',  TO_DATE(' 1958/4/8 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'M', TO_DATE('1998/5/29	1:02:44', 'yyyy/mm/dd hh24:mi:ss'), TO_DATE(' 2000/1/8 1:02:44', 'yyyy/mm/dd hh24:mi:ss'), '4/39 BALSTON ST', 'NORTHCOTE', '3802', '9998877', 1,  0,  18.75 );
insert into STAFF values ( 7, ' KNOL', 'VINCENZO',  TO_DATE(' 1943/9/10 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'F', TO_DATE('1997/7/21	1:02:44', 'yyyy/mm/dd hh24:mi:ss'), null, '41 LENNOX ST', 'NORTHCOTE', '3044', '98850345', 3,  0,  11.46 );
insert into STAFF values ( 8, ' PORTELLI', 'CATHERINE MARY',  TO_DATE(' 1956/8/18 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'M', TO_DATE('1997/9/23	1:02:44', 'yyyy/mm/dd hh24:mi:ss'), TO_DATE(' 1998/6/13 1:02:44', 'yyyy/mm/dd hh24:mi:ss'), '41 LENNOX ST ', 'BURWOOD VIC', '3095', '94994432', 1,  0,  17.7 );
insert into STAFF values ( 9, ' KHOR', 'GLENDA JEAN',  TO_DATE(' 1964/4/27 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'M', TO_DATE('1997/9/15	1:02:44', 'yyyy/mm/dd hh24:mi:ss'), TO_DATE(' 1998/10/29 1:02:44', 'yyyy/mm/dd hh24:mi:ss'), '10 AUSTIN ST ', 'ESSENDON ', '3040', '38502732', 1,  0,  12.33 );
insert into STAFF values ( 10, ' KHOR', 'GLENDA JEAN',  TO_DATE(' 1964/4/27 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'M', TO_DATE('1997/9/15	1:02:44', 'yyyy/mm/dd hh24:mi:ss'), TO_DATE(' 1998/10/29 1:02:44', 'yyyy/mm/dd hh24:mi:ss'), '10 AUSTIN ST ', 'ESSENDON ', '3040', '38502732', 1,  0,  12.33 );
insert into STAFF values ( 11, ' KHOR', 'GLENDA JEAN',  TO_DATE(' 1964/4/27 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'M', TO_DATE('1997/9/15	1:02:44', 'yyyy/mm/dd hh24:mi:ss'), TO_DATE(' 1998/10/29 1:02:44', 'yyyy/mm/dd hh24:mi:ss'), '10 AUSTIN ST ', 'ESSENDON ', '3040', '38502732', 1,  0,  12.33 );



 create table PROGRAMME
 (PROGRAMME_CODE VARCHAR2(6) PRIMARY KEY NOT NULL,
 PROGRAMME_NAME NVARCHAR2(50) NULL,
 DEPT_NO NUMERIC NULL);

 insert into PROGRAMME values ( '100102', 'BACHELOR OF ENGINEERING IN CHEMICAL ENGINEERING', 100);
insert into PROGRAMME values ( '100203', 'B ENG (CHEMICAL)/B BUS (BUSINESS ADMINISTRATION)', 165);
insert into PROGRAMME values ( '100207', '(R) MASTER OF ENGINEERING (CHEMICAL)', 117);
insert into PROGRAMME values ( '165000', '(R) MASTER OF APPLIED SCIENCE (CHEMICAL ENG)', 117);
insert into PROGRAMME values ( '165111', 'DUMMY CRSE ELECTIVE SUBJS', 117);
insert into PROGRAMME values ( '165213', 'DOCTOR OF PHILOSOPHY', 117);
insert into PROGRAMME values ( '165222', 'BACH OF ENG IN AEROSPACE ENGINEERING',	116);
insert into PROGRAMME values ( '165333', 'B.ENG IN CIVIL ENGINEERING', 116);
insert into PROGRAMME values ( '156003', 'BACHELOR OF ENGINEERING IN CIVIL ENGINEERING', 116);
insert into PROGRAMME values ( '165004', 'BACHELOR OF APP SCI (HONOURS) IN APPLIED GEOLOGY', 111);



 
create table COURSE
(COURSE_CODE CHAR(8) PRIMARY KEY NOT NULL,
 COURSE_NAME VARCHAR2(50) NULL,
 DEPT_NO NUMERIC NULL,
 FEE NUMERIC(10,2) NULL);


insert into course values('AC459','ACCOUNTING II ',3,30000);
insert into course values('BI918','MANAGERIAL FINANCE',3,25000);
insert into course values('ACCT3464','ACCOUNTING INFO SYST',3,33000);
insert into course values('AC102','INTRO TO COMPUTER SC',4,40000);
insert into course values('BI958','TURBO PASCAL',3,27500);
insert into course values('COSC2303','ADVANCED COBOL',3,40000);
insert into course values('COSC3320','DATA STRUCTURES ',4,29300);
insert into course values('COSC3380','DATABASE',3,311000);
insert into course values('COSC3701','OPERATIONS RESEARCH ',3,284000);
insert into course values('COSC4301','ADVANCED ASSEMBLER',3,30000);



 
 create table STUDENT_COURSE
( ENROL_NO NUMERIC(4) PRIMARY KEY NOT NULL,
  STUDENT_NO CHAR(8) NOT NULL,
  COURSE_CODE CHAR(5) NOT NULL,
  SEM_START NUMERIC(1) NULL,
  SEM_DURATION NUMERIC(1) NULL,
  RESULT NUMERIC(4,2) NULL,
  YEAR NUMERIC(4) NULL) ;
 
insert into STUDENT_COURSE values (  1,	'9103191X',	'BI958', 	1, 	2, 	79.3, 	1989);
insert into STUDENT_COURSE values (  2,	'9103191X',	'AC022',	1,	2,	67.3,	1980);
insert into STUDENT_COURSE values (  3,	'9103191X',	'AC459',	1,	2,	70.5,	1980);
insert into STUDENT_COURSE values (  4,	'9103191X',	'AC022',	1,	2,	50.2,	1993);
insert into STUDENT_COURSE values (  5,	'2103191X',	'AC022',	1,	2,	51.1,	1994);
insert into STUDENT_COURSE values (  6,	'9204606G',	'AC022',	1,	2,	84.2,	1993);
insert into STUDENT_COURSE values (  7,	'9205092K',	'BI918',	1,	2,	30.9,	1993);
insert into STUDENT_COURSE values (  8,	'3103191X',	'BI918',	1,	1,	83.2,	1976);
insert into STUDENT_COURSE values (  9,	'3103191X',	'BI918',    2,	1,	8,		1980);
insert into STUDENT_COURSE values (  10,'3103191X',	'BI918',	2,	1,	79.6,	1982);
insert into STUDENT_COURSE values (  11,'2103191X',	'BI918',	1,	1,	33.1,	1977);
insert into STUDENT_COURSE values (  12,'2103191X',	'AC102',	2,	1,	58.9,	1982);
insert into STUDENT_COURSE values (  13,'3103191X',	'AC459',	1,	1,	90.3,	1983);
insert into STUDENT_COURSE values (  14,'7902813P',	 'AC459',	1,	1,	85.3,	1979);
insert into STUDENT_COURSE values (  15,'3103191X',	'AC102',	1,	1,	56.1,	1983);
insert into STUDENT_COURSE values (  16,'4103191X',	'AC459',	1,	1,	97.3,	1984);
insert into STUDENT_COURSE values (  17,'4103191X',	'BI958',	2,	1,	91,	1985);
insert into STUDENT_COURSE values (  18,'8202005X',	'AC102',	1,	1,	33.9,	1983);
insert into STUDENT_COURSE values (  19,'8202179M',	'BI958',	1,	1,	96.4,	1985);
insert into STUDENT_COURSE values (  20,'5103191X',	'AC102',	1,	1,	55.4,	1987);

 insert into STUDENT_COURSE values (  21,'5103191X',	'BI918',	1,	1,	55.4,	1987);
 insert into STUDENT_COURSE values (  22,'5103191X',	'BI918',	2,	1,	55.4,	1987);
 insert into STUDENT_COURSE values (  23,'4103191X',	'BI918',	1,	2,	55.4,	2000);
 insert into STUDENT_COURSE values (  24,'5103191X',	'BI918',	1,	1,	55.4,	1997);


