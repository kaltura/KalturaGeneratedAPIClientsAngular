
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaDeliveryServerNode, KalturaDeliveryServerNodeArgs } from './KalturaDeliveryServerNode';

export interface KalturaMediaServerNodeArgs  extends KalturaDeliveryServerNodeArgs {
    applicationName? : string;
	mediaServerPortConfig? : KalturaKeyValue[];
	mediaServerPlaybackDomainConfig? : KalturaKeyValue[];
}


export class KalturaMediaServerNode extends KalturaDeliveryServerNode {

    applicationName : string;
	mediaServerPortConfig : KalturaKeyValue[];
	mediaServerPlaybackDomainConfig : KalturaKeyValue[];

    constructor(data? : KalturaMediaServerNodeArgs)
    {
        super(data);
        if (typeof this.mediaServerPortConfig === 'undefined') this.mediaServerPortConfig = [];
		if (typeof this.mediaServerPlaybackDomainConfig === 'undefined') this.mediaServerPlaybackDomainConfig = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaServerNode' },
				applicationName : { type : 's' },
				mediaServerPortConfig : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				mediaServerPlaybackDomainConfig : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaServerNode',KalturaMediaServerNode);
