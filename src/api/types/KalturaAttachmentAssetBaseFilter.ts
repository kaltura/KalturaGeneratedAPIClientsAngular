
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAttachmentType } from './KalturaAttachmentType';
import { KalturaAttachmentAssetStatus } from './KalturaAttachmentAssetStatus';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaAttachmentAssetBaseFilterArgs  extends KalturaAssetFilterArgs {
    formatEqual? : KalturaAttachmentType;
	formatIn? : string;
	statusEqual? : KalturaAttachmentAssetStatus;
	statusIn? : string;
	statusNotIn? : string;
}


export class KalturaAttachmentAssetBaseFilter extends KalturaAssetFilter {

    formatEqual : KalturaAttachmentType;
	formatIn : string;
	statusEqual : KalturaAttachmentAssetStatus;
	statusIn : string;
	statusNotIn : string;

    constructor(data? : KalturaAttachmentAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAttachmentAssetBaseFilter' },
				formatEqual : { type : 'es', subTypeConstructor : KalturaAttachmentType, subType : 'KalturaAttachmentType' },
				formatIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaAttachmentAssetStatus, subType : 'KalturaAttachmentAssetStatus' },
				statusIn : { type : 's' },
				statusNotIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAttachmentAssetBaseFilter',KalturaAttachmentAssetBaseFilter);
