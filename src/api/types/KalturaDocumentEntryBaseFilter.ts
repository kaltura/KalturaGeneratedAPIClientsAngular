
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDocumentType } from './KalturaDocumentType';
import { KalturaBaseEntryFilter, KalturaBaseEntryFilterArgs } from './KalturaBaseEntryFilter';

export interface KalturaDocumentEntryBaseFilterArgs  extends KalturaBaseEntryFilterArgs {
    documentTypeEqual? : KalturaDocumentType;
	documentTypeIn? : string;
	assetParamsIdsMatchOr? : string;
	assetParamsIdsMatchAnd? : string;
}


export class KalturaDocumentEntryBaseFilter extends KalturaBaseEntryFilter {

    documentTypeEqual : KalturaDocumentType;
	documentTypeIn : string;
	assetParamsIdsMatchOr : string;
	assetParamsIdsMatchAnd : string;

    constructor(data? : KalturaDocumentEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentEntryBaseFilter' },
				documentTypeEqual : { type : 'en', subTypeConstructor : KalturaDocumentType, subType : 'KalturaDocumentType' },
				documentTypeIn : { type : 's' },
				assetParamsIdsMatchOr : { type : 's' },
				assetParamsIdsMatchAnd : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDocumentEntryBaseFilter',KalturaDocumentEntryBaseFilter);
