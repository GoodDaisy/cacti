// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.17.3
// source: fabric/view_data.proto

package fabric

import (
	peer "github.com/hyperledger/fabric-protos-go/peer"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type FabricView struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// `Response` from the peers
	// https://github.com/hyperledger/fabric-protos-go/blob/master/peer/proposal_response.pb.go#L113
	// We only need the `Payload` field though.
	Response                  *peer.Response                         `protobuf:"bytes,1,opt,name=response,proto3" json:"response,omitempty"`
	EndorsedProposalResponses []*FabricView_EndorsedProposalResponse `protobuf:"bytes,2,rep,name=endorsed_proposal_responses,json=endorsedProposalResponses,proto3" json:"endorsed_proposal_responses,omitempty"`
}

func (x *FabricView) Reset() {
	*x = FabricView{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fabric_view_data_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FabricView) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FabricView) ProtoMessage() {}

func (x *FabricView) ProtoReflect() protoreflect.Message {
	mi := &file_fabric_view_data_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FabricView.ProtoReflect.Descriptor instead.
func (*FabricView) Descriptor() ([]byte, []int) {
	return file_fabric_view_data_proto_rawDescGZIP(), []int{0}
}

func (x *FabricView) GetResponse() *peer.Response {
	if x != nil {
		return x.Response
	}
	return nil
}

func (x *FabricView) GetEndorsedProposalResponses() []*FabricView_EndorsedProposalResponse {
	if x != nil {
		return x.EndorsedProposalResponses
	}
	return nil
}

type FabricView_EndorsedProposalResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// `ProposalResponsePayload` is the output produced by each peer and signed as a serialized blob
	// https://github.com/hyperledger/fabric-protos-go/blob/master/peer/proposal_response.pb.go#L176
	// `ProposalResponsePayload` contains an `Extension` field which is of type `ChaincodeAction`
	// https://github.com/hyperledger/fabric-protos-go/blob/master/peer/proposal.pb.go#L280
	// We only need the `ProposalHash`, `ChaincodeId` and `Response` fields.
	Payload *peer.ProposalResponsePayload `protobuf:"bytes,1,opt,name=payload,proto3" json:"payload,omitempty"`
	// Each `Endorsement` is an identity coupled with a signature
	// https://github.com/hyperledger/fabric-protos-go/blob/master/peer/proposal_response.pb.go#L242
	Endorsement *peer.Endorsement `protobuf:"bytes,2,opt,name=endorsement,proto3" json:"endorsement,omitempty"`
}

func (x *FabricView_EndorsedProposalResponse) Reset() {
	*x = FabricView_EndorsedProposalResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fabric_view_data_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FabricView_EndorsedProposalResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FabricView_EndorsedProposalResponse) ProtoMessage() {}

func (x *FabricView_EndorsedProposalResponse) ProtoReflect() protoreflect.Message {
	mi := &file_fabric_view_data_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FabricView_EndorsedProposalResponse.ProtoReflect.Descriptor instead.
func (*FabricView_EndorsedProposalResponse) Descriptor() ([]byte, []int) {
	return file_fabric_view_data_proto_rawDescGZIP(), []int{0, 0}
}

func (x *FabricView_EndorsedProposalResponse) GetPayload() *peer.ProposalResponsePayload {
	if x != nil {
		return x.Payload
	}
	return nil
}

func (x *FabricView_EndorsedProposalResponse) GetEndorsement() *peer.Endorsement {
	if x != nil {
		return x.Endorsement
	}
	return nil
}

var File_fabric_view_data_proto protoreflect.FileDescriptor

var file_fabric_view_data_proto_rawDesc = []byte{
	0x0a, 0x16, 0x66, 0x61, 0x62, 0x72, 0x69, 0x63, 0x2f, 0x76, 0x69, 0x65, 0x77, 0x5f, 0x64, 0x61,
	0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x66, 0x61, 0x62, 0x72, 0x69, 0x63,
	0x2e, 0x76, 0x69, 0x65, 0x77, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x1c, 0x70, 0x65, 0x65, 0x72,
	0x2f, 0x70, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x5f, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc0, 0x02, 0x0a, 0x0a, 0x46, 0x61, 0x62,
	0x72, 0x69, 0x63, 0x56, 0x69, 0x65, 0x77, 0x12, 0x2c, 0x0a, 0x08, 0x72, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x52, 0x08, 0x72, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x75, 0x0a, 0x1b, 0x65, 0x6e, 0x64, 0x6f, 0x72, 0x73, 0x65,
	0x64, 0x5f, 0x70, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x5f, 0x72, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x35, 0x2e, 0x66, 0x61, 0x62,
	0x72, 0x69, 0x63, 0x2e, 0x76, 0x69, 0x65, 0x77, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x46, 0x61,
	0x62, 0x72, 0x69, 0x63, 0x56, 0x69, 0x65, 0x77, 0x2e, 0x45, 0x6e, 0x64, 0x6f, 0x72, 0x73, 0x65,
	0x64, 0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x52, 0x19, 0x65, 0x6e, 0x64, 0x6f, 0x72, 0x73, 0x65, 0x64, 0x50, 0x72, 0x6f, 0x70, 0x6f,
	0x73, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x73, 0x1a, 0x8c, 0x01, 0x0a,
	0x18, 0x45, 0x6e, 0x64, 0x6f, 0x72, 0x73, 0x65, 0x64, 0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61,
	0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x39, 0x0a, 0x07, 0x70, 0x61, 0x79,
	0x6c, 0x6f, 0x61, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x73, 0x2e, 0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x07, 0x70, 0x61, 0x79,
	0x6c, 0x6f, 0x61, 0x64, 0x12, 0x35, 0x0a, 0x0b, 0x65, 0x6e, 0x64, 0x6f, 0x72, 0x73, 0x65, 0x6d,
	0x65, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2e, 0x45, 0x6e, 0x64, 0x6f, 0x72, 0x73, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x0b,
	0x65, 0x6e, 0x64, 0x6f, 0x72, 0x73, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x42, 0x75, 0x0a, 0x22, 0x63,
	0x6f, 0x6d, 0x2e, 0x77, 0x65, 0x61, 0x76, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2e, 0x66, 0x61, 0x62, 0x72, 0x69, 0x63, 0x2e, 0x76, 0x69, 0x65, 0x77, 0x5f, 0x64, 0x61, 0x74,
	0x61, 0x5a, 0x4f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x68, 0x79,
	0x70, 0x65, 0x72, 0x6c, 0x65, 0x64, 0x67, 0x65, 0x72, 0x2d, 0x6c, 0x61, 0x62, 0x73, 0x2f, 0x77,
	0x65, 0x61, 0x76, 0x65, 0x72, 0x2d, 0x64, 0x6c, 0x74, 0x2d, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x6f,
	0x70, 0x65, 0x72, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2d, 0x67, 0x6f, 0x2f, 0x66, 0x61, 0x62, 0x72,
	0x69, 0x63, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_fabric_view_data_proto_rawDescOnce sync.Once
	file_fabric_view_data_proto_rawDescData = file_fabric_view_data_proto_rawDesc
)

func file_fabric_view_data_proto_rawDescGZIP() []byte {
	file_fabric_view_data_proto_rawDescOnce.Do(func() {
		file_fabric_view_data_proto_rawDescData = protoimpl.X.CompressGZIP(file_fabric_view_data_proto_rawDescData)
	})
	return file_fabric_view_data_proto_rawDescData
}

var file_fabric_view_data_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_fabric_view_data_proto_goTypes = []interface{}{
	(*FabricView)(nil),                          // 0: fabric.view_data.FabricView
	(*FabricView_EndorsedProposalResponse)(nil), // 1: fabric.view_data.FabricView.EndorsedProposalResponse
	(*peer.Response)(nil),                       // 2: protos.Response
	(*peer.ProposalResponsePayload)(nil),        // 3: protos.ProposalResponsePayload
	(*peer.Endorsement)(nil),                    // 4: protos.Endorsement
}
var file_fabric_view_data_proto_depIdxs = []int32{
	2, // 0: fabric.view_data.FabricView.response:type_name -> protos.Response
	1, // 1: fabric.view_data.FabricView.endorsed_proposal_responses:type_name -> fabric.view_data.FabricView.EndorsedProposalResponse
	3, // 2: fabric.view_data.FabricView.EndorsedProposalResponse.payload:type_name -> protos.ProposalResponsePayload
	4, // 3: fabric.view_data.FabricView.EndorsedProposalResponse.endorsement:type_name -> protos.Endorsement
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_fabric_view_data_proto_init() }
func file_fabric_view_data_proto_init() {
	if File_fabric_view_data_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_fabric_view_data_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FabricView); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_fabric_view_data_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FabricView_EndorsedProposalResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_fabric_view_data_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_fabric_view_data_proto_goTypes,
		DependencyIndexes: file_fabric_view_data_proto_depIdxs,
		MessageInfos:      file_fabric_view_data_proto_msgTypes,
	}.Build()
	File_fabric_view_data_proto = out.File
	file_fabric_view_data_proto_rawDesc = nil
	file_fabric_view_data_proto_goTypes = nil
	file_fabric_view_data_proto_depIdxs = nil
}
