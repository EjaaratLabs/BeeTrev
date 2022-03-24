import 'package:flutter/material.dart';

class b_info extends StatefulWidget {
  const b_info({Key? key}) : super(key: key);

  @override
  _b_infoState createState() => _b_infoState();
}

class _b_infoState extends State<b_info> {
  List<basic_infoCard> info = [
    basic_infoCard(
        name: "Name:Samad",
        number: "Number:03334224224",
        address: "Address:xyz street karachi",
        EmergencyContactName: "Emergency contact: Ali Akbar",
        Emergencynumber: "Emergency Number:03234212123"),
    basic_infoCard(
        name: "Name:Samad",
        number: "Number:03334224224",
        address: "Address:xyz street karachi",
        EmergencyContactName: "Emergency contact: Ali Akbar",
        Emergencynumber: "Emergency Number:03234212123"),
    basic_infoCard(
        name: "Name:Samad",
        number: "Number:03334224224",
        address: "Address:xyz street karachi",
        EmergencyContactName: "Emergency contact: Ali Akbar",
        Emergencynumber: "Emergency Number:03234212123"),
    basic_infoCard(
        name: "Name:Samad",
        number: "Number:03334224224",
        address: "Address:xyz street karachi",
        EmergencyContactName: "Emergency contact: Ali Akbar",
        Emergencynumber: "Emergency Number:03234212123"),
    basic_infoCard(
        name: "Name:Samad",
        number: "Number:03334224224",
        address: "Address:xyz street karachi",
        EmergencyContactName: "Emergency contact: Ali Akbar",
        Emergencynumber: "Emergency Number:03234212123"),
    basic_infoCard(
        name: "Name:Samad",
        number: "Number:03334224224",
        address: "Address:xyz street karachi",
        EmergencyContactName: "Emergency contact: Ali Akbar",
        Emergencynumber: "Emergency Number:03234212123"),
    basic_infoCard(
        name: "Name:Samad",
        number: "Number:03334224224",
        address: "Address:xyz street karachi",
        EmergencyContactName: "Emergency contact: Ali Akbar",
        Emergencynumber: "Emergency Number:03234212123"),
    basic_infoCard(
        name: "Name:Samad",
        number: "Number:03334224224",
        address: "Address:xyz street karachi",
        EmergencyContactName: "Emergency contact: Ali Akbar",
        Emergencynumber: "Emergency Number:03234212123"),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: ListView.builder(
            scrollDirection: Axis.vertical,
            shrinkWrap: true,
            physics: ScrollPhysics(),
            itemCount: info.length,
            itemBuilder: (context, index) {
              return Card(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  // mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(info[index].name),
                    SizedBox(
                      height: 10.0,
                    ),
                    Text(info[index].number),
                    SizedBox(
                      height: 10.0,
                    ),
                    Text(info[index].address),
                    SizedBox(
                      height: 10.0,
                    ),
                    Text(info[index].EmergencyContactName),
                    SizedBox(
                      height: 10.0,
                    ),
                    Text(info[index].Emergencynumber),
                  ],
                ),
              );
            }));
  }
}

class basic_infoCard {
  String name;
  String number;
  String address;
  String EmergencyContactName;
  String Emergencynumber;

  basic_infoCard(
      {required this.name,
      required this.number,
      required this.address,
      required this.EmergencyContactName,
      required this.Emergencynumber});
}
