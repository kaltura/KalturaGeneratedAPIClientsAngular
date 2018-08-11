
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDocumentType } from './KalturaDocumentType';
import { KalturaBaseEntry, KalturaBaseEntryArgs } from './KalturaBaseEntry';

export interface KalturaDocumentEntryArgs  extends KalturaBaseEntryArgs {
    documentType? : KalturaDocumentType;
}


export class KalturaDocumentEntry extends KalturaBaseEntry {

    documentType : KalturaDocumentType;
	readonly assetParamsIds : string;

    constructor(data? : KalturaDocumentEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentEntry' },
				documentType : { type : 'en', subTypeConstructor : KalturaDocumentType, subType : 'KalturaDocumentType' },
				assetParamsIds : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDocumentEntry'] = KalturaDocumentEntry;