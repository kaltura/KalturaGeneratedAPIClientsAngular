
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUiConfObjType } from './KalturaUiConfObjType';
import { KalturaUiConfCreationMode } from './KalturaUiConfCreationMode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUiConfArgs  extends KalturaObjectBaseArgs {
    name? : string;
	description? : string;
	objType? : KalturaUiConfObjType;
	width? : number;
	height? : number;
	htmlParams? : string;
	swfUrl? : string;
	confFile? : string;
	confFileFeatures? : string;
	config? : string;
	confVars? : string;
	useCdn? : boolean;
	tags? : string;
	swfUrlVersion? : string;
	creationMode? : KalturaUiConfCreationMode;
	html5Url? : string;
	partnerTags? : string;
}


export class KalturaUiConf extends KalturaObjectBase {

    readonly id : number;
	name : string;
	description : string;
	readonly partnerId : number;
	objType : KalturaUiConfObjType;
	readonly objTypeAsString : string;
	width : number;
	height : number;
	htmlParams : string;
	swfUrl : string;
	readonly confFilePath : string;
	confFile : string;
	confFileFeatures : string;
	config : string;
	confVars : string;
	useCdn : boolean;
	tags : string;
	swfUrlVersion : string;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	creationMode : KalturaUiConfCreationMode;
	html5Url : string;
	readonly version : string;
	partnerTags : string;

    constructor(data? : KalturaUiConfArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUiConf' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				description : { type : 's' },
				partnerId : { type : 'n', readOnly : true },
				objType : { type : 'en', subTypeConstructor : KalturaUiConfObjType, subType : 'KalturaUiConfObjType' },
				objTypeAsString : { type : 's', readOnly : true },
				width : { type : 'n' },
				height : { type : 'n' },
				htmlParams : { type : 's' },
				swfUrl : { type : 's' },
				confFilePath : { type : 's', readOnly : true },
				confFile : { type : 's' },
				confFileFeatures : { type : 's' },
				config : { type : 's' },
				confVars : { type : 's' },
				useCdn : { type : 'b' },
				tags : { type : 's' },
				swfUrlVersion : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				creationMode : { type : 'en', subTypeConstructor : KalturaUiConfCreationMode, subType : 'KalturaUiConfCreationMode' },
				html5Url : { type : 's' },
				version : { type : 's', readOnly : true },
				partnerTags : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUiConf',KalturaUiConf);
