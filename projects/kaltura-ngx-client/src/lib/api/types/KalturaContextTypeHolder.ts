
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaContextType } from './KalturaContextType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaContextTypeHolderArgs  extends KalturaObjectBaseArgs {
    type? : KalturaContextType;
}


export class KalturaContextTypeHolder extends KalturaObjectBase {

    type : KalturaContextType;

    constructor(data? : KalturaContextTypeHolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaContextTypeHolder' },
				type : { type : 'es', subTypeConstructor : KalturaContextType, subType : 'KalturaContextType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaContextTypeHolder'] = KalturaContextTypeHolder;