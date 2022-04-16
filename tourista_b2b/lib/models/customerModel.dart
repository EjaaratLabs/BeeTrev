import 'dart:convert';

List<CustomerModel> domainsModelFromMap(String str) => List<CustomerModel>.from(
    json.decode(str).map((x) => CustomerModel.fromMap(x)));

String domainsModelToMap(List<CustomerModel> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toMap())));

class CustomerModel {
  CustomerModel({
    required this.name,
    required this.customerPhone,
  });

  String name;
  String customerPhone;

  factory CustomerModel.fromMap(Map<String, dynamic> json) => CustomerModel(
        name: json["name"],
        customerPhone: json["customerPhone"],
      );

  Map<String, dynamic> toMap() => {
        "name": name,
        "customerPhone": customerPhone,
      };
}
