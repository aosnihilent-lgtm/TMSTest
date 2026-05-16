namespace my.bookshop;
@cds.persistence.exists
entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}
entity Books1 {
  key ID : Integer;
  title1  : String;
  stock1  : Integer;
}
