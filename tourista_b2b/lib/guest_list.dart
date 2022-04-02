import 'package:flutter/material.dart';
import 'package:tourista_b2b/guest_details.dart';
import 'package:tourista_b2b/models/customerModel.dart';
import 'package:tourista_b2b/services/services.dart';

class guestList extends StatefulWidget {
  const guestList({Key? key}) : super(key: key);

  @override
  _guestListState createState() => _guestListState();
}

class _guestListState extends State<guestList> {
  void initState() {
    super.initState();
    _requestInit();
  }

  _requestInit() async {
    var temp = await Services().getcustomer();
    setState(() {
      aboutCard = temp;
    });
  }

  List<CustomerModel> aboutCard = [
    // about_card(title: "Samad", description: "No Of Guests: 5"),
    // about_card(title: "Hunzala", description: "No Of Guests: 3"),
    // about_card(title: "Ahmed", description: "No Of Guests: 10"),
    // about_card(title: "Samad", description: "No Of Guests: 5"),
    // about_card(title: "Hunzala", description: "No Of Guests: 3"),
    // about_card(title: "Ahmed", description: "No Of Guests: 10"),
    // about_card(title: "Samad", description: "No Of Guests: 5"),
    // about_card(title: "Hunzala", description: "No Of Guests: 3"),
    // about_card(title: "Ahmed", description: "No Of Guests: 10"),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text("Select Tour"),
        backgroundColor: Color(0xffa014eb),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Align(
              alignment: Alignment.center,
              child: Container(
                width: 150.0,
                height: 150.0,
                // alignment: Alignment.center,
                decoration: new BoxDecoration(
                  image: DecorationImage(
                      // alignment: Alignment.center,

                      image: AssetImage('assets/preview.png'),
                      fit: BoxFit.fill),
                ),
              ),
            ),
            ListView.builder(
                scrollDirection: Axis.vertical,
                shrinkWrap: true,
                physics: ScrollPhysics(),
                itemCount: aboutCard.length,
                itemBuilder: (context, index) {
                  return Card(
                    child: new InkWell(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => guest_details()),
                        );
                      },
                      child: ListTile(
                        title: Text(aboutCard[index].name),
                        subtitle: Text(
                          aboutCard[index].customerPhone,
                          style: TextStyle(fontSize: 12),
                        ),
                      ),
                    ),
                  );
                }),
          ],
        ),
      ),
    );
  }
}
