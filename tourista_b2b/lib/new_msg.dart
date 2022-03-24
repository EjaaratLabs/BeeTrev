import 'package:flutter/material.dart';

class broadCast_msg extends StatefulWidget {
  const broadCast_msg({Key? key}) : super(key: key);

  @override
  _broadCast_msgState createState() => _broadCast_msgState();
}

class _broadCast_msgState extends State<broadCast_msg> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(
          "New Message",
          style: TextStyle(fontSize: 16),
        ),
        backgroundColor: Color(0xffa014eb),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        // mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          SizedBox(
            height: 15.0,
          ),
          // SizedBox(
          //   width: 20.0,
          // ),
          Align(
            alignment: Alignment.center,
            child: Text(
              "Create Message",
              style: TextStyle(fontSize: 20.0, fontWeight: FontWeight.bold),
            ),
          ),
          SizedBox(
            height: 15.0,
          ),
          Padding(
            padding: const EdgeInsets.only(left: 15.0, right: 9.0),
            child: TextField(
              maxLines: 6,
              decoration: InputDecoration(
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(10.0)),
                  ),
                  hintText: "Make An Announcment"),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(10.0, 30.0, 10.0, 0),
            child: FlatButton(
              height: 50,
              onPressed: () {},
              color: Color(0xffa014eb),
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(50),
                  side: BorderSide(
                      color: Color(0xffa014eb), style: BorderStyle.solid)),
              child:
                  Text("submit", style: TextStyle(fontWeight: FontWeight.bold)),
              textColor: Colors.white,
            ),
          ),
        ],
      ),
    );
  }
}
