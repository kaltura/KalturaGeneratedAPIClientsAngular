
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';

export interface KalturaQuizUserEntryArgs  extends KalturaUserEntryArgs {
    
}


export class KalturaQuizUserEntry extends KalturaUserEntry {

    readonly score : number;

    constructor(data? : KalturaQuizUserEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuizUserEntry' },
				score : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaQuizUserEntry'] = KalturaQuizUserEntry;