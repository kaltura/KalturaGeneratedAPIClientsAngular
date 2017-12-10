
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDocumentListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaDocumentListResponse extends KalturaListResponse {

    readonly objects : KalturaDocumentEntry[];

    constructor(data? : KalturaDocumentListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaDocumentEntry, subType : 'KalturaDocumentEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDocumentListResponse',KalturaDocumentListResponse);
