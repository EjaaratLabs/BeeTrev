import 'package:flutter/material.dart';
import 'package:tourista_b2b/guest_details.dart';

class guestList extends StatefulWidget {
  const guestList({Key? key}) : super(key: key);

  @override
  _guestListState createState() => _guestListState();
}

class _guestListState extends State<guestList> {
  List aboutCard = [
    about_card(title: "Samad", description: "No Of Guests: 5"),
    about_card(title: "Hunzala", description: "No Of Guests: 3"),
    about_card(title: "Ahmed", description: "No Of Guests: 10"),
    about_card(title: "Samad", description: "No Of Guests: 5"),
    about_card(title: "Hunzala", description: "No Of Guests: 3"),
    about_card(title: "Ahmed", description: "No Of Guests: 10"),
    about_card(title: "Samad", description: "No Of Guests: 5"),
    about_card(title: "Hunzala", description: "No Of Guests: 3"),
    about_card(title: "Ahmed", description: "No Of Guests: 10"),
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
                        title: Text(aboutCard[index].title),
                        subtitle: Text(
                          aboutCard[index].description,
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

class about_card {
  String title;
  String description;

  about_card({required this.title, required this.description});
}
