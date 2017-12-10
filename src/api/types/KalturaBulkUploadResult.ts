
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadResultStatus } from './KalturaBulkUploadResultStatus';
import { KalturaBulkUploadAction } from './KalturaBulkUploadAction';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaBulkUploadPluginData } from './KalturaBulkUploadPluginData';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadResultArgs  extends KalturaObjectBaseArgs {
    bulkUploadJobId? : number;
	lineIndex? : number;
	partnerId? : number;
	status? : KalturaBulkUploadResultStatus;
	action? : KalturaBulkUploadAction;
	objectId? : string;
	objectStatus? : number;
	bulkUploadResultObjectType? : KalturaBulkUploadObjectType;
	rowData? : string;
	partnerData? : string;
	objectErrorDescription? : string;
	pluginsData? : KalturaBulkUploadPluginData[];
	errorDescription? : string;
	errorCode? : string;
	errorType? : number;
}


export class KalturaBulkUploadResult extends KalturaObjectBase {

    readonly id : number;
	bulkUploadJobId : number;
	lineIndex : number;
	partnerId : number;
	status : KalturaBulkUploadResultStatus;
	action : KalturaBulkUploadAction;
	objectId : string;
	objectStatus : number;
	bulkUploadResultObjectType : KalturaBulkUploadObjectType;
	rowData : string;
	partnerData : string;
	objectErrorDescription : string;
	pluginsData : KalturaBulkUploadPluginData[];
	errorDescription : string;
	errorCode : string;
	errorType : number;

    constructor(data? : KalturaBulkUploadResultArgs)
    {
        super(data);
        if (typeof this.pluginsData === 'undefined') this.pluginsData = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResult' },
				id : { type : 'n', readOnly : true },
				bulkUploadJobId : { type : 'n' },
				lineIndex : { type : 'n' },
				partnerId : { type : 'n' },
				status : { type : 'es', subTypeConstructor : KalturaBulkUploadResultStatus, subType : 'KalturaBulkUploadResultStatus' },
				action : { type : 'es', subTypeConstructor : KalturaBulkUploadAction, subType : 'KalturaBulkUploadAction' },
				objectId : { type : 's' },
				objectStatus : { type : 'n' },
				bulkUploadResultObjectType : { type : 'es', subTypeConstructor : KalturaBulkUploadObjectType, subType : 'KalturaBulkUploadObjectType' },
				rowData : { type : 's' },
				partnerData : { type : 's' },
				objectErrorDescription : { type : 's' },
				pluginsData : { type : 'a', subTypeConstructor : KalturaBulkUploadPluginData, subType : 'KalturaBulkUploadPluginData' },
				errorDescription : { type : 's' },
				errorCode : { type : 's' },
				errorType : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadResult',KalturaBulkUploadResult);
