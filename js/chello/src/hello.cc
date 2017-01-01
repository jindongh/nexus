#include <node.h>
#include <v8.h>
using namespace v8;

void SayHello(const FunctionCallbackInfo<Value>& info) {
Isolate* isolate = info.GetIsolate();
info.GetReturnValue().Set(String::NewFromUtf8(isolate, "Hello Worlp"));
}

void Init_Hello(Local<Object> exports) {
NODE_SET_METHOD(exports, "sayHello", SayHello);
}
NODE_MODULE(hello, Init_Hello)
