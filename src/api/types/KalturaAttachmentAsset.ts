
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAttachmentType } from './KalturaAttachmentType';
import { KalturaAttachmentAssetStatus } from './KalturaAttachmentAssetStatus';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaAttachmentAssetArgs  extends KalturaAssetArgs {
    filename? : string;
	title? : string;
	format? : KalturaAttachmentType;
}


export class KalturaAttachmentAsset extends KalturaAsset {

    filename : string;
	title : string;
	format : KalturaAttachmentType;
	readonly status : KalturaAttachmentAssetStatus;

    constructor(data? : KalturaAttachmentAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAttachmentAsset' },
				filename : { type : 's' },
				title : { type : 's' },
				format : { type : 'es', subTypeConstructor : KalturaAttachmentType, subType : 'KalturaAttachmentType' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaAttachmentAssetStatus, subType : 'KalturaAttachmentAssetStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAttachmentAsset',KalturaAttachmentAsset);
